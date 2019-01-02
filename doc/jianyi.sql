/*
Navicat MySQL Data Transfer

Source Server         : MyData
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : jianyi

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2019-01-01 23:52:26
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for indent
-- ----------------------------
DROP TABLE IF EXISTS `indent`;
CREATE TABLE `indent` (
  `gid` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `img1` varchar(255) DEFAULT NULL,
  `num` varchar(255) DEFAULT NULL,
  `articleNo` varchar(255) DEFAULT NULL,
  `spec` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`gid`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of indent
-- ----------------------------
INSERT INTO `indent` VALUES ('5', '德国 博朗 AS720离子造型风筒 3551 DF', '540.00', 'images/121920_0_100x100.jpg', '1', null, null);
INSERT INTO `indent` VALUES ('6', 'COSBEAUTY/可思美 电子美容仪  DF', '490.00', 'images/121003_0_100x100.jpg', '4', null, null);
INSERT INTO `indent` VALUES ('8', '飞利浦 离子梳 HP4676/05 白色  DF', '999.00', 'images/122167_0_100x100.jpg', '1', null, null);

-- ----------------------------
-- Table structure for list
-- ----------------------------
DROP TABLE IF EXISTS `list`;
CREATE TABLE `list` (
  `gid` int(255) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `spec` varchar(255) DEFAULT NULL,
  `articleNo` varchar(255) DEFAULT NULL,
  `img1` varchar(255) DEFAULT NULL,
  `img2` varchar(255) DEFAULT NULL,
  `img3` varchar(255) DEFAULT NULL,
  `img4` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`gid`)
) ENGINE=MyISAM AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of list
-- ----------------------------
INSERT INTO `list` VALUES ('1', 'FOREO露娜 迷你2净透洁面仪（樱桃红）', '1280.00', 'mini2', '41548', 'images/COSBEAUTY.jpg', 'images/COSBEAUTY2.jpg', 'images/COSBEAUTY3.jpg', 'images/COSBEAUTY4.jpg');
INSERT INTO `list` VALUES ('2', 'COSBEAUTY/可思美 智能声波洁面仪 DF', '998.00', 'mini2', '41549', 'images/120999_0_100x100.jpg', 'images/120999_1_100x100.jpg', 'images/120999_2_100x100.jpg', 'images/120999_3_100x100.jpg');
INSERT INTO `list` VALUES ('3', 'COSBEAUTY/可思美 声波电动洁面仪 DF', '498.00', 'mini2', '41550', 'images/121000_0_100x100.jpg', 'images/121000_1_100x100.jpg', 'images/121000_2_100x100.jpg', 'images/121000_3_100x100.jpg');
INSERT INTO `list` VALUES ('4', '小熊 电动美甲器指甲美甲器修甲刀 DF', '770.00', 'mini2', '41551', 'images/122588_0_100x100.jpg', 'images/122588_1_100x100.jpg', 'images/122588_2_100x100.jpg', 'images/122588_3_100x100.jpg');
INSERT INTO `list` VALUES ('5', '德国 博朗 AS720离子造型风筒 3551 DF', '540.00', 'mini2', '41552', 'images/121920_0_100x100.jpg', 'images/121920_1_100x100.jpg', 'images/121920_2_100x100.jpg', 'images/121920_3_100x100.jpg');
INSERT INTO `list` VALUES ('6', 'COSBEAUTY/可思美 电子美容仪  DF', '490.00', 'mini2', '41553', 'images/121003_0_100x100.jpg', 'images/121003_1_100x100.jpg', 'images/121003_2_100x100.jpg', 'images/121003_3_100x100.jpg');
INSERT INTO `list` VALUES ('7', '小熊  烘干机 HGJ-A12R1  DF', '1790.00', 'mini2', '41554', 'images/125435_0_100x100.jpg', 'images/125435_1_100x100.jpg', 'images/125435_2_100x100.jpg', 'images/125435_3_100x100.jpg');
INSERT INTO `list` VALUES ('8', '飞利浦 离子梳 HP4676/05 白色  DF', '999.00', 'mini2', '41555', 'images/122167_0_100x100.jpg', 'images/122167_1_100x100.jpg', 'images/122167_2_100x100.jpg', 'images/122167_3_100x100.jpg');
INSERT INTO `list` VALUES ('9', 'COSBEAUTY/可思美妆补水仪 DF', '666.00', 'mini2', '41556', 'images/121005_0_100x100.jpg', 'images/121005_1_100x100.jpg', 'images/121005_2_100x100.jpg', 'images/121005_3_100x100.jpg');
INSERT INTO `list` VALUES ('10', 'COSBEAUTY/可思美 日本美容仪DF', '888.00', 'mini2', '41557', 'images/121137_0_100x100.jpg', 'images/121137_1_100x100.jpg', 'images/121137_2_100x100.jpg', 'images/121137_3_100x100.jpg');
INSERT INTO `list` VALUES ('11', '飞利浦 净颜焕彩SPA甄选套装 DF', '450.00', 'mini2', '41558', 'images/122162_0_100x100.jpg', 'images/122162_1_100x100.jpg', 'images/122162_2_100x100.jpg', 'images/122162_3_100x100.jpg');
INSERT INTO `list` VALUES ('12', '美克斯 脸部按摩器 NV8668粉白 DF', '898.00', 'mini2', '41559', 'images/122631_0_100x100.jpg', 'images/122631_1_100x100.jpg', 'images/122631_2_100x100.jpg', 'images/122631_3_100x100.jpg');
INSERT INTO `list` VALUES ('13', '小熊 加湿器 JSQ-A50U1 DF', '868.00', 'mini2', '41560', 'images/121413_0_100x100.jpg', 'images/121413_1_100x100.jpg', 'images/121413_2_100x100.jpg', 'images/121413_3_100x100.jpg');
INSERT INTO `list` VALUES ('14', 'Midea/美的  车载吸尘器 0.3L DF', '900.00', 'mini2', '41561', 'images/116378_0_100x100.jpg', 'images/116378_1_100x100.jpg', 'images/116378_2_100x100.jpg', 'images/116378_3_100x100.jpg');
INSERT INTO `list` VALUES ('15', '赛诺菲 多烯磷脂酰胆碱胶囊 36粒', '685,00', 'mini2', '41562', 'images/76322_0_100x100.jpg', 'images/76322_1_100x100.jpg', 'images/76322_2_100x100.jpg', 'images/76322_3_100x100.jpg');
INSERT INTO `list` VALUES ('16', '远达 消炎利胆胶囊 36粒', '789.00', 'mini2', '41563', 'images/113826_0_100x100.jpg', 'images/113826_1_100x100.jpg', 'images/113826_2_100x100.jpg', 'images/113826_3_100x100.jpg');
INSERT INTO `list` VALUES ('17', '优贺丁 阿德福韦酯片 14片', '365.00', 'mini2', '41564', 'images/115024_0_100x100.jpg', 'images/115024_1_100x100.jpg', 'images/115024_2_100x100.jpg', 'images/115024_3_100x100.jpg');
INSERT INTO `list` VALUES ('18', '鹊牌 垂盆草颗粒 5g×15袋/盒 ', '300.00', 'mini2', '41565', 'images/124032_0_100x100.jpg', 'images/124032_1_100x100.jpg', 'images/124032_2_100x100.jpg', 'images/124032_3_100x100.jpg');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `﻿gid` int(255) unsigned NOT NULL AUTO_INCREMENT,
  `paw` varchar(255) DEFAULT NULL,
  `tel` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`﻿gid`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'q12345', '13122222222');
INSERT INTO `user` VALUES ('5', 'a12345', '13233333333');
INSERT INTO `user` VALUES ('3', 'a12345', '13222222222');
INSERT INTO `user` VALUES ('4', 'ass122', '13211111111');
INSERT INTO `user` VALUES ('6', 'a12345', '13233333334');
INSERT INTO `user` VALUES ('7', 'a12345', '13233333335');
INSERT INTO `user` VALUES ('8', 'a12345', '13212222222');
SET FOREIGN_KEY_CHECKS=1;
