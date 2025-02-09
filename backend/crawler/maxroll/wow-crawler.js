import * as cheerio from 'cheerio';
import puppeteer from 'puppeteer';
import { translate } from '../api/index.js';

async function crawler() {
  let browser;
  try {
    browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    // 直连即可
    await page.goto(
      'https://maxroll.gg/wow/class-guides/augmentation-evoker-mythic-plus-guide',
      {
        timeout: 120000,
      }
    );
    const html = await page.content();
    const $ = cheerio.load(html);

    const data = await getStatsPriority($);
    console.log(data);
  } catch (error) {
    console.error(error);
  } finally {
    await browser?.close?.();
  }
}
crawler();

async function getStatsPriority(context) {
  const $ = context;
  // 0:= | 1: > | 2: >>
  const ICON_MAP = {
    'M8 6l16 10l-16 10': 1,
    'M2 6l16 10l-16 10 M14 6l16 10l-16 10': 2,
    'M8 12l16 0M8 20l16 0': 0,
  };
  const STAT_MAP = {
    intellect: '智力',
    mastery: '精通',
    'critical strike': '暴击',
    haste: '急速',
    versatility: '全能',
    strength: '力量',
    agility: '敏捷',
  };
  const output = [];

  // 获取属性优先级
  $('div[data-wow-type="priority"]').each((index, element) => {
    const priority = {
      talentLabel: '',
      talentID: '',
      stats: [],
      relations: [],
      desc: [],
    };
    $(element)
      .find($('.mxt-stat span'))
      .each((childIndex, stat) => {
        priority.stats.push(STAT_MAP[$(stat).text().toLowerCase()]);
      });
    $(element)
      .find($('.mxt-relation path'))
      .each((childIndex, relation) => {
        priority.relations.push(ICON_MAP[$(relation).attr('d')]);
      });

    output.push(priority);
  });

  // 获取英雄专精和属性优先级的对应关系
  $('div[data-wow-type="priority"]')
    .first()
    .parentsUntil('#main-article')
    .last()
    .find('.wow-trait')
    .each((index, element) => {
      // 会获取到冗余的element
      if (index <= output.length - 1) {
        output[index].talentID = Number($(element).attr('data-wow-id'));
        output[index].talentLabel = $(element).text();
      }
    });

  // 获取属性优先级的讲解文本
  $('div[data-wow-type="priority"]')
    .first()
    .parentsUntil('#main-article')
    .last()
    .children()
    .last()
    .children()
    .each((index, element) => {
      if ($(element).children('ul').length && index <= output.length - 1) {
        $(element)
          .children('ul')
          .first()
          .children('li')
          .each((childIndex, descItem) => {
            output[index].desc.push($(descItem).text());
          });
      }
    });

  async function translateDesc(statDataItem, index) {
    if (statDataItem.desc.length) {
      const data = await translate(statDataItem.desc.join('||'));
      // 部分字段翻译有歧义，手动替换
      output[index].desc = data
        .replace('急躁', '急速')
        .replace('状态', '属性')
        .split('||');
    }
  }
  const translationPromises = output.map((item, index) =>
    translateDesc(item, index)
  );

  await Promise.allSettled(translationPromises);
  return output;
}
