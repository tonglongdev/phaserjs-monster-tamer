import {
  BATTLE_ASSET_KEYS,
  BATTLE_BACKGROUND_ASSET_KEYS,
  EXP_BAR_ASSET_KEYS,
  EXTERNAL_LINKS_ASSET_KEYS,
  HEALTH_BAR_ASSET_KEYS,
  MONSTER_ASSET_KEYS,
  UI_ASSET_KEYS,
} from "../assets/asset-keys.js";
import { SHOW_SOCIAL_LINKS } from "../config.js";
import Phaser from "../lib/phaser.js";
import { SCENE_KEYS } from "./scene-keys.js";

export class PreloadScene extends Phaser.Scene {
  constructor() {
    super({
      key: SCENE_KEYS.PRELOAD_SCENE,
    });
  }

  preload() {
    const monsterTamerAssetPath = "assets/images/monster-tamer";
    const kenneysAssetPath = "assets/images/kenneys-assets";
    const pimenAssetPath = "assets/images/pimen";
    const axulArtAssetPath = "assets/images/axulart";
    const pbGamesAssetPath = "assets/images/parabellum-games";

    // external social links assets
    if (SHOW_SOCIAL_LINKS) {
      this.load.image(
        EXTERNAL_LINKS_ASSET_KEYS.GITHUB_BANNER,
        "assets/images/external-social/forkme_right_red_aa0000.webp",
      );
      this.load.image(
        EXTERNAL_LINKS_ASSET_KEYS.YOUTUBE_BUTTON,
        "assets/images/external-social/WatchonYouTube-white-3xPNG.png",
      );
      this.load.image(
        EXTERNAL_LINKS_ASSET_KEYS.LEARN_MORE_BACKGROUND,
        "assets/images/external-social/blank.png",
      );
      this.load.image(
        EXTERNAL_LINKS_ASSET_KEYS.YOUTUBE_THUMB_NAIL,
        "assets/images/external-social/thumbnail.jpeg",
      );
    }

    // battle backgrounds
    this.load.image(
      BATTLE_BACKGROUND_ASSET_KEYS.FOREST,
      `${monsterTamerAssetPath}/battle-backgrounds/forest-background.png`,
    );

    // battle assets
    this.load.image(
      BATTLE_ASSET_KEYS.HEALTH_BAR_BACKGROUND,
      `${kenneysAssetPath}/ui-space-expansion/custom-ui.png`,
    );
    this.load.image(
      BATTLE_ASSET_KEYS.BALL_THUMBNAIL,
      `${monsterTamerAssetPath}/battle/cosmoball.png`,
    );
    this.load.image(
      BATTLE_ASSET_KEYS.DAMAGED_BALL,
      `${monsterTamerAssetPath}/battle/damagedBall.png`,
    );
    this.load.image(
      BATTLE_ASSET_KEYS.TRAINER_YOUTH_BOY,
      `${monsterTamerAssetPath}/battle/trainer_youth_boy.png`,
    );
    this.load.image(
      BATTLE_ASSET_KEYS.TRAINER_YOUTH_GIRL,
      `${monsterTamerAssetPath}/battle/trainer_youth_girl.png`,
    );

    // health bar assets
    this.load.image(
      HEALTH_BAR_ASSET_KEYS.RIGHT_CAP,
      `${kenneysAssetPath}/ui-space-expansion/barHorizontal_green_right.png`,
    );
    this.load.image(
      HEALTH_BAR_ASSET_KEYS.MIDDLE,
      `${kenneysAssetPath}/ui-space-expansion/barHorizontal_green_mid.png`,
    );
    this.load.image(
      HEALTH_BAR_ASSET_KEYS.LEFT_CAP,
      `${kenneysAssetPath}/ui-space-expansion/barHorizontal_green_left.png`,
    );

    // exp bar assets
    this.load.image(
      EXP_BAR_ASSET_KEYS.EXP_RIGHT_CAP,
      `${kenneysAssetPath}/ui-space-expansion/barHorizontal_blue_right.png`,
    );
    this.load.image(
      EXP_BAR_ASSET_KEYS.EXP_MIDDLE,
      `${kenneysAssetPath}/ui-space-expansion/barHorizontal_blue_mid.png`,
    );
    this.load.image(
      EXP_BAR_ASSET_KEYS.EXP_LEFT_CAP,
      `${kenneysAssetPath}/ui-space-expansion/barHorizontal_blue_left.png`,
    );

    this.load.image(
      HEALTH_BAR_ASSET_KEYS.RIGHT_CAP_SHADOW,
      `${kenneysAssetPath}/ui-space-expansion/barHorizontal_shadow_right.png`,
    );
    this.load.image(
      HEALTH_BAR_ASSET_KEYS.MIDDLE_SHADOW,
      `${kenneysAssetPath}/ui-space-expansion/barHorizontal_shadow_mid.png`,
    );
    this.load.image(
      HEALTH_BAR_ASSET_KEYS.LEFT_CAP_SHADOW,
      `${kenneysAssetPath}/ui-space-expansion/barHorizontal_shadow_left.png`,
    );

    // monster assets
    this.load.image(
      MONSTER_ASSET_KEYS.CARNODUSK,
      `${monsterTamerAssetPath}/monsters/carnodusk.png`,
    );
    this.load.image(
      MONSTER_ASSET_KEYS.IGUANIGNITE,
      `${monsterTamerAssetPath}/monsters/iguanignite.png`,
    );
    this.load.image(
      MONSTER_ASSET_KEYS.AQUAVALOR,
      `${monsterTamerAssetPath}/monsters/aquavalor.png`,
    );
    this.load.image(
      MONSTER_ASSET_KEYS.FROSTSABER,
      `${monsterTamerAssetPath}/monsters/frostsaber.png`,
    );
    this.load.image(
      MONSTER_ASSET_KEYS.IGNIVOLT,
      `${monsterTamerAssetPath}/monsters/ignivolt.png`,
    );

    // ui assets
    this.load.image(
      UI_ASSET_KEYS.CURSOR,
      `${monsterTamerAssetPath}/ui/cursor.png`,
    );
    this.load.image(
      UI_ASSET_KEYS.CURSOR_WHITE,
      `${monsterTamerAssetPath}/ui/cursor_white.png`,
    );
    this.load.image(
      UI_ASSET_KEYS.MENU_BACKGROUND,
      `${kenneysAssetPath}/ui-space-expansion/glassPanel.png`,
    );
    this.load.image(
      UI_ASSET_KEYS.MENU_BACKGROUND_PURPLE,
      `${kenneysAssetPath}/ui-space-expansion/glassPanel_purple.png`,
    );
    this.load.image(
      UI_ASSET_KEYS.MENU_BACKGROUND_GREEN,
      `${kenneysAssetPath}/ui-space-expansion/glassPanel_green.png`,
    );
    this.load.image(
      UI_ASSET_KEYS.BLUE_BUTTON,
      `${kenneysAssetPath}/ui-pack/blue_button01.png`,
    );
    this.load.image(
      UI_ASSET_KEYS.BLUE_BUTTON_SELECTED,
      `${kenneysAssetPath}/ui-pack/blue_button00.png`,
    );
  }

  create() {
    this.add.image(0, 0, BATTLE_BACKGROUND_ASSET_KEYS.FOREST).setOrigin(0);
  }
}
