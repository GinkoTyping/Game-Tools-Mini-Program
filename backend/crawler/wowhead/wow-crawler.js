import * as cheerio from 'cheerio';
import puppeteer from 'puppeteer';

async function crawler() {
  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto(
      'https://maxroll.gg/wow/class-guides/augmentation-evoker-mythic-plus-guide'
    );
    const html = await page.content();
    const $ = cheerio.load(html);

    const data = getStatsPriority($);
    console.log(data);
  } catch (error) {
    console.error(error);
  } finally {
    await browser.close();
  }
}
crawler();

function getStatsPriority(context) {
  const $ = context;
  // 0:= | 1: > | 2: >>
  const ICON_MAP = {
    'M8 6l16 10l-16 10': 1,
    'M2 6l16 10l-16 10 M14 6l16 10l-16 10': 2,
    'M8 12l16 0M8 20l16 0': 0,
  };
  const output = [];

  $('div[data-wow-type="priority"]').each((index, element) => {
    const priority = {
      talentLabel: '',
      talentID: '',
      stats: [],
      relations: [],
    };
    $(element)
      .find($('.mxt-stat span'))
      .each((childIndex, stat) => {
        priority.stats.push($(stat).text());
      });
    $(element)
      .find($('.mxt-relation path'))
      .each((childIndex, stat) => {
        priority.relations.push(ICON_MAP[$(stat).attr('d')]);
      });

    output.push(priority);
  });

  $('div[data-wow-type="priority"]')
    .first()
    .parentsUntil('#main-article')
    .last()
    .find('.wow-trait')
    .each((index, element) => {
      // 会获取到冗余的element
      if (index <= output.length - 1) {
        output[index].talentID = $(element).attr('data-wow-id');
        output[index].talentLabel = $(element).text();
      }
    });

  return output;
}
