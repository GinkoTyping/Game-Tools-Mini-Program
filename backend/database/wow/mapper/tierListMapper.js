let db;

async function insertTierList(params) {
  const { versionId, tierData } = params;
  await db.run(
    `
    INSERT INTO wow_tier_list(version_id, tier_data) VALUES (?1, ?2)
  `,
    [versionId, tierData]
  );
}

async function getTierListByVersion(version) {
  await db.get(`SELECT * FROM wow_tier_list WHERE version_id = ?1`, [version]);
}

export function useTierListMapper(database) {
  if (database) {
    db = database;
    // 仅仅处理异常场景，正常使用 database都应该来源于外部
  } else {
    throw new Error('DB missing');
  }

  return { insertTierList, getTierListByVersion };
}
