// import { getDB } from "../../../database/wow/init.js";
// import clipboardy from "clipboardy";

const url = ["https://wow.zamimg.com/images/wow/icons/tiny/inv_helm_plate_earthendungeon_c_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_plate_outdoorarathor_d_01_belt.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_pants_raiddeathknightnerubian_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_plate_raidpaladinnerubian_d_01_boot.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_nerubian_ring_01_color3.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_ring_revendreth_01_brown.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_raid_mercurialegg_red.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_raid_abyssaleffigy_purple.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_axe_2h_nerubianraid_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_plate_raidpaladinnerubian_d_01_helm.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_plate_raidpaladinnerubian_d_01_bracer.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_belt_plate_raidwarriornerubian_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_qiraj_skinsandworm.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_raid_oversizedacidgland_green.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_raid_sikransarsenal_purple.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_neck_ardenweald_01_silver.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_shoulder_plate_dungeonplate_c_03.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_cape_mail_earthendungeon_c_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_chest_plate_earthendungeon_c_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_bracer_09.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_glove_plate_earthendungeon_c_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_belt_plate_kultirasdungeon_c_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_pant_plate_earthendungeon_c_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_boot_plate_earthendungeon_c_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_ring_80_02a.gif","https://wow.zamimg.com/images/wow/icons/tiny/spell_shadow_shadowmend.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_mace_2h_battledungeon_c_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_plate_outdoorarathor_d_01_helm.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_belt_plate_earthendungeon_c_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_plate_outdoorarathor_d_01_boot.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_etherealraid_communicator_color1.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_raid_mercurialegg_purple.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_axe_1h_nerubianraid_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_axe_1h_arathoroutdoor_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_nerubian_necklace_02_color3.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_boot_raiddeathknightnerubian_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_helm_drustmask_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_shoulder_plate_earthendungeon_c_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_misc_cape_cataclysm_caster_b_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_plate_oribosdungeon_c_01_glove.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_plate_oribosdungeon_c_01_pants.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_boot_plate_kultirasdungeon_c_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_11_0_nerubian_ring_01_color4.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_arathordungeon_fragment_color2.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_mace_1h_earthendungeon_c_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_nerubian_necklace_01_color4.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_cloth_outdoorarathor_d_01_cape.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_belt_plate_earthendungeon_c_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_jewelry_ring_66.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_sword_2h_earthendungeon_c_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_helm_raiddeathknightnerubian_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_nerubian_ring_02_color5.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_mace_2h_nerubianraid_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_11_0_earthen_earthennecklace01_color1.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_cape_plate_earthendungeon_c_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_argus_ring02.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_chest_raiddeathknightnerubian_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_mace_127.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_leather_raiddemonhunternerubian_d_01_helm.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_leather_raiddemonhunternerubian_d_01_shoulder.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_leather_raiddemonhunternerubian_d_01_chest.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_bracer_leather_raidroguenerubian_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_leather_outdoorarathor_d_01_glove.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_leather_earthendungeon_c_01_belt.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_leather_raiddemonhunternerubian_d_01_pant.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_leather_earthendungeon_c_01_boot.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_plate_outdoorarathor_d_01_bracer.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_glove_raiddeathknightnerubian_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_glaive_1h_arathoroutdoor_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_glove_leather_raiddruidnerubian_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_hand_1h_nerubianraid_d_02_blue.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_leather_raiddemonhunternerubian_d_01_boot.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_glaive_1h_nerubianraid_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_leather_earthendungeon_c_01_helm.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_leather_earthendungeon_c_01_shoulder.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_chest_leather_31.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_leather_earthendungeon_c_01_bracer.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_leather_earthendungeon_c_01_glove.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_leather_earthendungeon_c_01_pant.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_misc_coin_08.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_glaive_1h_battledungeon_c_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_glaive_1h_earthendungeon_c_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_leather_earthendungeon_c_01_helm.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_leather_earthendungeon_c_01_bracer.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_leather_raiddemonhunternerubian_d_01_glove.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_belt_leather_undergroundquest_b_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_boot_leather_kultirasdungeon_c_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_ring_80_05b.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_leather_raiddemonhunternerubian_d_01_belt.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_10_inscription2_repcontracts_trade_archaeology_apexisscroll_uprez_color4.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_raid_swarmlordsauthority_purple.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_raid_foulbehemothschelicera_red.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_sword_1h_arathor_c_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_leather_raiddemonhunternerubian_d_01_helm.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_bracer_leather_raidmonknerubian_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_hand_1h_nerubianraid_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_11_0_nerubian_necklace_01_color5.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_misc_cape_naxxramas_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_belt_leather_kultirasdungeon_c_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_ring_80_02a.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_hand_1h_earthendungeon_c_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_glaive_1h_earthendungeon_c_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_shoulder_leather_raiddruidnerubian_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_cape_special_nerubian_d_02.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_chest_leather_raiddruidnerubian_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_glove_leather_raiddruidnerubian_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_belt_leather_raidroguenerubian_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_pant_leather_raiddruidnerubian_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_11_0_raid_spymastersweb_purple.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_staff_2h_nerubianraid_d_02.gif",null,"https://wow.zamimg.com/images/wow/icons/tiny/inv_misc_stonering2.gif","https://wow.zamimg.com/images/wow/icons/tiny/spell_shadow_gathershadows.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_staff_2h_earthendungeon_c_02.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_helm_leather_raiddruidnerubian_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_alchemy_70_potion2.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_polearm_2h_nerubianraid_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_boot_leather_raidroguenerubian_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_staff_2h_nerubianraid_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_helm_leather_oribosdungeon_c_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_bracer_leather_oribosdungeon_c_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_belt_leather_oribosdungeon_c_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_boot_leather_oribosdungeon_c_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_11_0_nerubian_ring_01_color5.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_mace_1h_nerubianraid_d_02.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_offhand_1h_earthendungeon_c_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_offhand_1h_nerubianraid_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_pet_spectralporcupinered.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_arathordungeon_fragment_color5.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_helm_cloth_oribosdungeon_c_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_shoulder_cloth_raidmagenerubian_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_cape_cloth_raidmagenerubian_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_staff_2h_earthendungeon_c_02.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_cloth_outdoorarathor_d_01_bracer.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_glove_cloth_raidmagenerubian_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_belt_cloth_raidmagenerubian_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_chest_cloth_raidmagenerubian_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_boot_cloth_earthendungeon_c_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_11_0_nerubian_ring_02_color3.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_staff_2h_earthendungeon_c_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_offhand_1h_arathoroutdoor_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_cloth_raidwarlocknerubian_d_01_helm.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_bracer_cloth_raidmagenerubian_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_boot_cloth_raidmagenerubian_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_helm_cloth_earthendungeon_c_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_shoulder_cloth_earthendungeon_c_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_chest_cloth_earthendungeon_c_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_bracer_cloth_earthendungeon_c_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_glove_cloth_earthendungeon_c_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_belt_cloth_earthendungeon_c_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_pant_cloth_earthendungeon_c_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_knife_1h_nerubianraid_d_02.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_pant_cloth_raidmagenerubian_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_cloth_raidpriestnerubian_d_01_belt.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_shoulder_cloth_oribosdungeon_c_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_glove_cloth_oribosdungeon_c_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_helm_cloth_raidmagenerubian_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_pant_cloth_raidmagenerubian_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_cloth_outdoorarathor_d_01_boot.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_staff_2h_arathoroutdoor_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_pant_cloth_earthendungeon_c_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_boot_cloth_earthendungeon_c_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_knife_1h_cataclysm_c_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_helm_leather_raidmonknerubian_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_shoulder_leather_raidmonknerubian_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_chest_leather_raidmonknerubian_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_leather_outdoorarathor_d_01_glove.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_belt_leather_undergroundquest_b_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_pant_leather_raidmonknerubian_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_10_tailoring_purchasedthread_color2.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_sword_1h_earthendungeon_c_02.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_shoulder_leather_raidmonknerubian_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_glove_leather_raidmonknerubian_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_staff_2h_arathoroutdoor_d_01.gif","https://www.peakofserenity.com/wp-content/uploads/2019/07/Kowalski_and_Whiteboard-2.png","https://wow.zamimg.com/images/wow/icons/tiny/inv_chest_leather_raiddruidnerubian_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_cloth_dragonpvp_d_01_belt.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_plate_raidpaladinnerubian_d_01_helm.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_plate_raidpaladinnerubian_d_01_chest.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_arathordungeon_bell_color1.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_plate_raidpaladinnerubian_d_01_glove.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_plate_raidpaladinnerubian_d_01_pant.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_1h_oribosdungeon_c_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_shield_1h_nerubianraid_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_polearm_2h_earthendungeon_c_02.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_raid_creepingcoagulum_purple.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_sword_1h_nerubianraid_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_belt_plate_dungeonplate_c_03.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_shield_1h_earthendungeon_c_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_plate_raidpaladinnerubian_d_01_shoulder.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_mace_1h_oribosdungeon_c_02.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_bracer_raiddeathknightnerubian_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_sword_1h_nerubianraid_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_axe_2h_earthendungeon_c_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_glove_raiddeathknightnerubian_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_helm_leather_raidroguenerubian_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_shoulder_leather_raidroguenerubian_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_chest_leather_raidroguenerubian_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_leather_outdoorarathor_d_01_bracer.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_glove_leather_raidroguenerubian_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_leather_outdoorarathor_d_01_belt.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_pant_leather_raidroguenerubian_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_misc_spyglass_02.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_knife_1h_nerubianraid_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_knife_1h_nerubianraid_d_02.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_knife_1h_earthendungeon_c_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_knife_1h_earthendungeon_c_02.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_leather_outdoorarathor_d_01_bracer.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_shoulder_plate_raidwarriornerubian_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_pant_leather_raidmonknerubian_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_hammer_04.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_bracer_plate_earthendungeon_c_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_11_0_nerubian_ring_02_color5.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_knife_1h_oribosdungeon_c_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_leather_earthendungeon_c_01_shoulder.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_chest_leather_oribosdungeon_c_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_glove_leather_kultirasdungeon_c_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_belt_103.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_misc_kingsring2.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_helm_mail_raidshamannerubian_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_shoulder_mail_raidshamannerubian_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_chest_mail_raidevokernerubian_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_mail_outdoorarathor_d_01_bracer.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_glove_mail_raidshamannerubian_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_belt_mail_earthendungeon_c_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_robe_mail_raidshamannerubian_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_boot_mail_raidshamannerubian_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_knife_1h_arathoroutdoor_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_leather_outdoorarathor_d_01_pant.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_bracer_mail_raidshamannerubian_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_mail_raidhunternerubian_d_01_belt.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_boot_mail_raidevokernerubian_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_helm_drustmask_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_shoulder_mail_oribosdungeon_c_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_chest_mail_kultirasdungeon_c_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_bracer_mail_earthendungeon_c_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_glove_mail_earthendungeon_c_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_pants_mail_dungeonmail_c_03.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_mace_2h_earthendungeon_c_02.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_knife_1h_earthendungeon_c_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_shield_1h_oribosdungeon_c_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_boot_mail_earthendungeon_c_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_jewelry_talisman_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_hand_1h_undergroundquest_b_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_chest_mail_raidshamannerubian_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_mail_raidhunternerubian_d_01_bracer.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_belt_mail_raidevokernerubian_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_robe_mail_raidshamannerubian_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_boot_mail_oribosdungeon_c_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_bracer_mail_kultirasdungeon_c_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_belt_mail_kultirasdungeon_c_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_pant_mail_oribosdungeon_c_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_cloth_raidwarlocknerubian_d_01_helm.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_cloth_raidwarlocknerubian_d_01_shoulder.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_cloth_raidwarlocknerubian_d_01_robe.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_cloth_raidwarlocknerubian_d_01_glove.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_cloth_raidwarlocknerubian_d_01_pant.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_cloth_raidwarlocknerubian_d_01_boot.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_bracer_13.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_helmet_robe_dungeonrobe_c_03.gif",null,"https://wow.zamimg.com/images/wow/icons/tiny/inv_helm_plate_raidwarriornerubian_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_shoulder_plate_raidwarriornerubian_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_chest_plate_raidwarriornerubian_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_pant_plate_raidwarriornerubian_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_polearm_2h_earthendungeon_c_03.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_chest_plate_earthendungeon_c_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_plate_oribosdungeon_c_01_pants.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_plate_oribosdungeon_c_01_helm.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_glove_plate_raidwarriornerubian_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_buckle_raiddeathknightnerubian_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_glove_plate_kultirasdungeon_c_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_plate_oribosdungeon_c_01_shoulder.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_boot_plate_raidwarriornerubian_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_helm_mail_raidevokernerubian_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_shoulder_mail_raidevokernerubian_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_chest_mail_raidevokernerubian_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_glove_mail_raidevokernerubian_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_raid_aberrantspellforge_pink.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_helm_mail_earthendungeon_c_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_shoulder_mail_earthendungeon_c_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_chest_mail_earthendungeon_c_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_belt_mail_earthendungeon_c_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_pant_mail_earthendungeon_c_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_glove_mail_raidshamannerubian_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_pant_mail_raidevokernerubian_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_11_0_raid_spymastersweb_purple.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_nerubian_necklace_01_color4.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_glove_mail_earthendungeon_c_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_boots_mail_kultirasdungeon_c_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_helm_mail_oribosdungeon_c_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_cape_special_nerubian_d_02.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_mail_outdoorarathor_d_01_belt.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_11_0_jewelcrafting_ring_color1.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_stave_2h_cataclysm_c_02.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_sword_1h_nerubianraid_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_mail_raidhunternerubian_d_01_helm.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_cape_special_nerubian_d_02.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_cape_special_nerubian_d_02.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_misc_shell_04.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_sword_1h_earthendungeon_c_02.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_helm_mail_earthendungeon_c_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_11_0_earthen_earthennecklace01_color1.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_staff_2h_earthendungeon_c_02.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_mail_raidhunternerubian_d_01_helm.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_nerubian_necklace_01_color4.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_mail_raidhunternerubian_d_01_shoulder.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_leather_raiddemonhunternerubian_d_01_cape.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_mail_raidhunternerubian_d_01_chest.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_mail_outdoorarathor_d_01_bracer.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_mail_outdoorarathor_d_01_glove.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_mail_raidhunternerubian_d_01_belt.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_mail_raidhunternerubian_d_01_pant.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_mail_raidhunternerubian_d_01_boot.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_nerubian_ring_01_color3.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_11_0_nerubian_ring_01_color4.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_misc_coin_08.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_raid_abyssaleffigy_purple.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_crossbow_2h_nerubianraid_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_mail_raidhunternerubian_d_01_bracer.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_glove_mail_raidshamannerubian_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_nerubian_ring_02_color5.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_10_inscription2_repcontracts_trade_archaeology_apexisscroll_uprez_color4.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_neck_ardenweald_01_silver.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_mail_raidhunternerubian_d_01_cape.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_bracer_mail_earthendungeon_c_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_glove_mail_earthendungeon_c_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_belt_mail_earthendungeon_c_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_boots_mail_kultirasdungeon_c_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_ring_80_02a.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_raid_mercurialegg_red.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_crossbow_2h_earthendungeon_c_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_mail_raidhunternerubian_d_01_shoulder.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_mail_raidhunternerubian_d_01_chest.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_mail_raidhunternerubian_d_01_glove.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_mail_raidhunternerubian_d_01_pant.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_bow_1h_nerubianraid_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_mail_raidhunternerubian_d_01_helm.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_boots_mail_dungeonmail_c_03.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_firearm_2h_earthendungeon_c_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_shield_1h_oribosdungeon_c_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_boot_mail_earthendungeon_c_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_polearm_2h_arathoroutdoor_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_cloth_raidpriestnerubian_d_01_shoulder.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_cloth_raidpriestnerubian_d_01_chest.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_cloth_raidpriestnerubian_d_01_glove.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_cloth_raidpriestnerubian_d_01_pant.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_raid_gruesomesyringe_red.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_cloth_raidpriestnerubian_d_01_helm.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_cloth_raidwarlocknerubian_d_01_robe.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_bracer_cloth_oribosdungeon_c_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_mace_1h_oribosdungeon_c_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_offhand_1h_earthendungeon_c_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_cloth_raidwarlocknerubian_d_01_bracer.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_chest_cloth_earthendungeon_c_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_belt_cloth_earthendungeon_c_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_glove_cloth_oribosdungeon_c_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_cloth_raidpriestnerubian_d_01_glove.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_shoulder_raiddeathknightnerubian_d_01.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_leather_raiddemonhunternerubian_d_01_cape.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_11_0_nerubian_necklace_02_color5.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_pants_leather_dungeonleather_c_05.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_11_0_earthen_earthenring_color1.gif","https://wow.zamimg.com/images/wow/icons/tiny/inv_mail_raidhunternerubian_d_01_bracer.gif"]

// TODO 应该在爬取数据时，下载图片

function getImageFileName(url) {
  return url.split("/").pop();
}

async function downloadAsZip(imageUrls) {
  const zip = new JSZip();
  const imgFolder = zip.folder("images");
  
  // 并行获取所有图片（注意跨域限制）
  const fetchPromises = imageUrls.map(async (url, index) => {
    const response = await fetch(url);
    const blob = await response.blob();
    imgFolder.file(getImageFileName(url), blob);
  });

  await Promise.allSettled(fetchPromises);
  
  // 生成 ZIP 并触发下载
  const content = await zip.generateAsync({ type: "blob" });
  saveAs(content, "images.zip");
}

downloadAsZip(url);