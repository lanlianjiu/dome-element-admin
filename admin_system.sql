-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema admin_system
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema admin_system
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `admin_system` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ;
-- -----------------------------------------------------
-- Schema test
-- -----------------------------------------------------
USE `admin_system` ;

-- -----------------------------------------------------
-- Table `admin_system`.`company_status`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `admin_system`.`company_status` (
  `id` INT NOT NULL,
  `status` VARCHAR(255) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `admin_system`.`company_table`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `admin_system`.`company_table` (
  `companyId` INT NOT NULL COMMENT '公司ID',
  `companypId` INT NOT NULL DEFAULT 0 COMMENT '父级公司ID',
  `companyCode` VARCHAR(45) NULL COMMENT '公司编码唯一性',
  `companyName` VARCHAR(45) NULL COMMENT '公司名称',
  `status` INT NOT NULL COMMENT '公司状态',
  `createName` VARCHAR(45) NULL COMMENT '创建人名称',
  `createUserId` INT NULL COMMENT '创建人ID',
  `createTime` DATETIME(0) NULL COMMENT '创建时间',
  `updateUserId` INT NULL COMMENT '更新人ID',
  `updateTime` DATETIME(0) NULL COMMENT '更新时间',
  PRIMARY KEY (`companyId`),
  UNIQUE INDEX `id_UNIQUE` (`companyId` ASC),
  UNIQUE INDEX `companyCode_UNIQUE` (`companyCode` ASC),
  INDEX `fk_company_table_company_status1_idx` (`status` ASC),
  CONSTRAINT `fk_company_table_company_status1`
    FOREIGN KEY (`status`)
    REFERENCES `admin_system`.`company_status` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `admin_system`.`depart_stauts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `admin_system`.`depart_stauts` (
  `id` INT NOT NULL,
  `status` VARCHAR(255) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `admin_system`.`department_table`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `admin_system`.`department_table` (
  `departId` INT NOT NULL,
  `departpId` INT NOT NULL DEFAULT 0 COMMENT '父级部门ID',
  `departCode` VARCHAR(255) NULL,
  `companyId` INT NOT NULL,
  `stauts` INT NOT NULL,
  `createName` VARCHAR(255) NULL,
  `createUserId` INT NULL,
  `createTime` DATETIME(0) NULL,
  `updateUserId` INT NULL,
  `updateTime` DATETIME(0) NULL,
  PRIMARY KEY (`departId`),
  UNIQUE INDEX `departId_UNIQUE` (`departId` ASC),
  UNIQUE INDEX `departCode_UNIQUE` (`departCode` ASC),
  INDEX `fk_department_table_company_table1_idx` (`companyId` ASC),
  INDEX `fk_department_table_depart_stauts1_idx` (`stauts` ASC),
  CONSTRAINT `fk_department_table_company_table1`
    FOREIGN KEY (`companyId`)
    REFERENCES `admin_system`.`company_table` (`companyId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_department_table_depart_stauts1`
    FOREIGN KEY (`stauts`)
    REFERENCES `admin_system`.`depart_stauts` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `admin_system`.`menus_status`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `admin_system`.`menus_status` (
  `id` INT NOT NULL,
  `status` VARCHAR(255) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `admin_system`.`menus_table`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `admin_system`.`menus_table` (
  `id` INT NOT NULL COMMENT '菜单ID',
  `pid` INT NULL DEFAULT 0,
  `menusCode` VARCHAR(255) NULL COMMENT '菜单编码',
  `companyId` INT NOT NULL COMMENT '公司ID',
  `departId` INT NOT NULL COMMENT '部门ID',
  `status` INT NOT NULL COMMENT '菜单状态',
  `name` VARCHAR(255) NULL COMMENT '菜单名称',
  `path` VARCHAR(255) NULL COMMENT '菜单路由路径',
  `component` VARCHAR(255) NULL COMMENT '菜单组件路径',
  `redirect` VARCHAR(255) NULL COMMENT '菜单重定向地址',
  `hidden` VARCHAR(255) NULL COMMENT '菜单是否隐藏',
  `is_external_link` VARCHAR(255) NULL COMMENT '菜单是否外链',
  `sortNo` INT NULL COMMENT '菜单排序号',
  `meta` VARCHAR(255) NULL COMMENT '菜单其他设置的json字段',
  `createName` VARCHAR(255) NULL COMMENT '创建人名称',
  `createUserId` INT NULL COMMENT '创建人ID',
  `createTime` DATETIME(0) NULL COMMENT '创建时间',
  `updateUserId` INT NULL COMMENT '更新人ID',
  `updateTime` DATETIME(0) NULL COMMENT '更新时间',
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  INDEX `fk_menus_table_menus_status1_idx` (`status` ASC),
  INDEX `fk_menus_table_company_table1_idx` (`companyId` ASC),
  INDEX `fk_menus_table_department_table1_idx` (`departId` ASC),
  CONSTRAINT `fk_menus_table_menus_status1`
    FOREIGN KEY (`status`)
    REFERENCES `admin_system`.`menus_status` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_menus_table_company_table1`
    FOREIGN KEY (`companyId`)
    REFERENCES `admin_system`.`company_table` (`companyId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_menus_table_department_table1`
    FOREIGN KEY (`departId`)
    REFERENCES `admin_system`.`department_table` (`departId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `admin_system`.`role_status`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `admin_system`.`role_status` (
  `id` INT NOT NULL,
  `status` VARCHAR(255) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `admin_system`.`role_table`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `admin_system`.`role_table` (
  `roleId` INT NOT NULL COMMENT '角色ID',
  `roleCode` VARCHAR(255) NULL COMMENT '角色编码',
  `roleName` VARCHAR(255) NULL COMMENT '角色名称',
  `companyId` INT NOT NULL COMMENT '公司ID',
  `departId` INT NOT NULL COMMENT '部门ID',
  `status` INT NOT NULL COMMENT '角色状态',
  `desc` VARCHAR(255) NULL COMMENT '角色备注',
  `menuIds` VARCHAR(255) NULL COMMENT '角色菜单ID数组',
  `createName` VARCHAR(255) NULL COMMENT '创建人名称',
  `createUserId` INT NULL COMMENT '创建人ID',
  `createTime` DATETIME(0) NULL COMMENT '创建时间',
  `updateUserId` INT NULL COMMENT '更新人ID',
  `updateTime` DATETIME(0) NULL COMMENT '更新时间',
  PRIMARY KEY (`roleId`),
  UNIQUE INDEX `roleId_UNIQUE` (`roleId` ASC),
  UNIQUE INDEX `roleCode_UNIQUE` (`roleCode` ASC),
  INDEX `fk_role_table_company_table1_idx` (`companyId` ASC),
  INDEX `fk_role_table_department_table1_idx` (`departId` ASC),
  INDEX `fk_role_table_role_status1_idx` (`status` ASC),
  CONSTRAINT `fk_role_table_company_table1`
    FOREIGN KEY (`companyId`)
    REFERENCES `admin_system`.`company_table` (`companyId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_role_table_department_table1`
    FOREIGN KEY (`departId`)
    REFERENCES `admin_system`.`department_table` (`departId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_role_table_role_status1`
    FOREIGN KEY (`status`)
    REFERENCES `admin_system`.`role_status` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `admin_system`.`user_status`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `admin_system`.`user_status` (
  `id` INT NOT NULL,
  `status` VARCHAR(255) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `admin_system`.`user_table`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `admin_system`.`user_table` (
  `userId` INT NOT NULL COMMENT '用户ID',
  `companyId` INT NOT NULL COMMENT '公司ID',
  `departId` INT NOT NULL COMMENT '部门ID',
  `status` INT NOT NULL COMMENT '用户状态',
  `userName` VARCHAR(255) NULL COMMENT '用户账号',
  `nickName` VARCHAR(255) NULL COMMENT '用户昵称',
  `userSex` INT NULL COMMENT '用户性别',
  `userMobile` VARCHAR(255) NULL COMMENT '用户电话',
  `userEmali` VARCHAR(255) NULL COMMENT '用户邮箱',
  `roles` VARCHAR(255) NULL COMMENT '存角色id数组',
  `introduction` VARCHAR(255) NULL COMMENT '用户备注',
  `avatar` VARCHAR(255) NULL COMMENT '用户头像',
  `createName` VARCHAR(255) NULL COMMENT '创建人名称',
  `createUserId` INT NULL COMMENT '创建人ID',
  `createTime` DATETIME(0) NULL COMMENT '创建时间',
  `updateUserId` INT NULL COMMENT '更新人ID',
  `updateTime` DATETIME(0) NULL COMMENT '更新时间',
  PRIMARY KEY (`userId`),
  UNIQUE INDEX `userId_UNIQUE` (`userId` ASC),
  INDEX `fk_user_table_company_table1_idx` (`companyId` ASC),
  INDEX `fk_user_table_department_table1_idx` (`departId` ASC),
  INDEX `fk_user_table_user_status1_idx` (`status` ASC),
  CONSTRAINT `fk_user_table_company_table1`
    FOREIGN KEY (`companyId`)
    REFERENCES `admin_system`.`company_table` (`companyId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_table_department_table1`
    FOREIGN KEY (`departId`)
    REFERENCES `admin_system`.`department_table` (`departId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_table_user_status1`
    FOREIGN KEY (`status`)
    REFERENCES `admin_system`.`user_status` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


-- -----------------------------------------------------
-- 初始化数据
-- -----------------------------------------------------

INSERT INTO `admin_system`.`company_status` (`id`, `status`) VALUES ('1', '有效');
INSERT INTO `admin_system`.`company_status` (`id`, `status`) VALUES ('2', '无效');

INSERT INTO `admin_system`.`depart_stauts` (`id`, `status`) VALUES ('1', '有效');
INSERT INTO `admin_system`.`depart_stauts` (`id`, `status`) VALUES ('2', '无效');

INSERT INTO `admin_system`.`menus_status` (`id`, `status`) VALUES ('1', '有效');
INSERT INTO `admin_system`.`menus_status` (`id`, `status`) VALUES ('2', '无效');

INSERT INTO `admin_system`.`role_status` (`id`, `status`) VALUES ('1', '有效');
INSERT INTO `admin_system`.`role_status` (`id`, `status`) VALUES ('2', '无效');

INSERT INTO `admin_system`.`user_status` (`id`, `status`) VALUES ('1', '有效');
INSERT INTO `admin_system`.`user_status` (`id`, `status`) VALUES ('2', '无效');

INSERT INTO `admin_system`.`company_table` (`companyId`, `companypId`, `companyCode`, `companyName`, `status`, `createName`, `createUserId`) VALUES ('1', '0', 'admin_system', '平台', '1', '平台管理员', '1');

INSERT INTO `admin_system`.`department_table` (`departId`, `departpId`, `departCode`, `companyId`, `stauts`, `createName`, `createUserId`) VALUES ('1', '0', '平台部门', '1', '1', 'admin', '1');

INSERT INTO `admin_system`.`user_table` (`userId`, `companyId`, `departId`, `status`, `userName`, `nickName`, `userSex`, `roles`, `avatar`) VALUES ('1', '1', '1', '1', 'admin', '平台管理员', '1', '["admin"]', 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80');

INSERT INTO `admin_system`.`role_table` (`roleId`, `roleCode`, `roleName`, `companyId`, `departId`, `status`, `menuIds`, `createName`, `createUserId`) VALUES ('1', 'admin_system', '平台管理员', '1', '1', '1', '[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]', '平台管理员', '1');

INSERT INTO `admin_system`.`menus_table` (`id`, `pid`, `menusCode`, `companyId`, `departId`, `status`, `name`, `path`, `redirect`, `hidden`, `is_external_link`, `sortNo`, `meta`, `createName`, `createUserId`) VALUES ('1', '0', 'SYS_MGT', '1', '1', '1', '系统管理', '/system', 'noRedirect', 'false', 'false', '1', '{"icon": "el-icon-setting","title": "系统管理","noCache": false,"breadcrumb": true,"affix": false,"activeMenu": '',"is_local": false}', 'admin', '1');
INSERT INTO `admin_system`.`menus_table` (`id`, `pid`, `menusCode`, `companyId`, `departId`, `status`, `name`, `path`, `component`, `redirect`, `hidden`, `is_external_link`, `sortNo`, `meta`, `createName`, `createUserId`) VALUES ('2', '1', 'SYS_MGT_MENUS', '1', '1', '1', '菜单管理', 'menuMgt', '/system/menuMgt/index', '/system/menuMgt/list', 'false', 'false', '1', '{"icon": '',"title": "菜单管理","noCache": false,"breadcrumb": true,"affix": false,"activeMenu": '',"is_local": false}', 'admin', '1');
INSERT INTO `admin_system`.`menus_table` (`id`, `pid`, `menusCode`, `companyId`, `departId`, `status`, `name`, `path`, `component`, `hidden`, `is_external_link`, `sortNo`, `meta`, `createName`, `createUserId`) VALUES ('3', '2', 'SYS_MGT_MENUS_LIST', '1', '1', '1', '菜单列表', 'list', '/system/menuMgt/list', 'true', 'false', '1', '{"title": "菜单列表","noCache": true,"activeMenu": "/system/menuMgt","icon": '',"breadcrumb": true,"affix": false,"is_local": false}', 'admin', '1');
INSERT INTO `admin_system`.`menus_table` (`id`, `pid`, `menusCode`, `companyId`, `departId`, `status`, `name`, `path`, `component`, `hidden`, `is_external_link`, `sortNo`, `meta`, `createName`, `createUserId`) VALUES ('4', '2', 'SYS_MGT_MENUS_EDIT', '1', '1', '1', '编辑菜单', 'edit', '/system/menuMgt/edit', 'true', 'false', '2', '{"title": "编辑菜单","noCache": true,"activeMenu": "/system/menuMgt","icon": '',"breadcrumb": true,"affix": false,"is_local": false}', 'admin', '1');
INSERT INTO `admin_system`.`menus_table` (`id`, `pid`, `menusCode`, `companyId`, `departId`, `status`, `name`, `path`, `component`, `hidden`, `is_external_link`, `sortNo`, `meta`, `createName`, `createUserId`) VALUES ('5', '2', 'SYS_MGT_MENUS_CREATE', '1', '1', '1', '添加菜单', 'create', '/system/menuMgt/create', 'true', 'false', '3', '{ "title": "添加菜单","activeMenu": "/system/menuMgt","icon": '',"noCache": true,"breadcrumb": true,"affix": false,"is_local": false}', 'admin', '1');
INSERT INTO `admin_system`.`menus_table` (`id`, `pid`, `menusCode`, `companyId`, `departId`, `status`, `name`, `path`, `component`, `redirect`, `hidden`, `is_external_link`, `sortNo`, `meta`, `createName`, `createUserId`) VALUES ('6', '1', 'SYS_MGT_USER', '1', '1', '1', '用户管理', 'userMgt', '/system/userMgt/index', '/system/userMgt/list', 'false', 'false', '2', '{"title": "用户管理","icon": '',"noCache": false,"breadcrumb": true,"affix": false,"activeMenu": '',"is_local": false}', 'admin', '1');
INSERT INTO `admin_system`.`menus_table` (`id`, `pid`, `menusCode`, `companyId`, `departId`, `status`, `name`, `path`, `component`, `hidden`, `is_external_link`, `sortNo`, `meta`, `createName`, `createUserId`) VALUES ('7', '6', 'SYS_MGT_USER_LIST', '1', '1', '1', '用户列表', 'list', '/system/userMgt/list', 'true', 'false', '1', '{"title": "用户列表","noCache": true,"activeMenu": "/system/userMgt","icon": '',"breadcrumb": true,"affix": false,"is_local": false}', 'admin', '1');
INSERT INTO `admin_system`.`menus_table` (`id`, `pid`, `menusCode`, `companyId`, `departId`, `status`, `name`, `path`, `component`, `redirect`, `hidden`, `is_external_link`, `sortNo`, `meta`, `createName`, `createUserId`) VALUES ('8', '1', 'SYS_MGT_COMPANY', '1', '1', '1', '公司管理', 'companyMgt', '/system/companyMgt/index', '/system/companyMgt/list', 'false', 'false', '3', '{"title": "公司管理","icon": '',"noCache": false,"breadcrumb": true,"affix": false,"activeMenu": '',"is_local": false}', 'admin', '1');
INSERT INTO `admin_system`.`menus_table` (`id`, `pid`, `menusCode`, `companyId`, `departId`, `status`, `name`, `path`, `component`, `hidden`, `is_external_link`, `sortNo`, `meta`, `createName`, `createUserId`) VALUES ('9', '8', 'SYS_MGT_COMPANY_LIST', '1', '1', '1', '公司列表', 'list', '/system/companyMgt/list', 'true', 'false', '1', '{"title": "公司列表","noCache": true,"activeMenu": "/system/companyMgt","icon": '',"breadcrumb": true,"affix": false,"is_local": false}', 'admin', '1');
INSERT INTO `admin_system`.`menus_table` (`id`, `pid`, `menusCode`, `companyId`, `departId`, `status`, `name`, `path`, `component`, `redirect`, `hidden`, `is_external_link`, `sortNo`, `meta`, `createName`, `createUserId`) VALUES ('10', '1', 'SYS_MGT_DEPART', '1', '1', '1', '部门管理', 'departMgt', '/system/departMgt/index', '/system/departMgt/list', 'false', 'false', '4', '{"title": "部门管理","icon": '',"noCache": false,"breadcrumb": true,"affix": false,"activeMenu": '',"is_local": false}', 'admin', '1');
INSERT INTO `admin_system`.`menus_table` (`id`, `pid`, `menusCode`, `companyId`, `departId`, `status`, `name`, `path`, `component`, `hidden`, `is_external_link`, `sortNo`, `meta`, `createName`, `createUserId`) VALUES ('11', '10', 'SYS_MGT_DEPART_LIST', '1', '1', '1', '部门列表', 'list', '/system/departMgt/list', 'true', 'false', '1', '{"title": "部门列表","noCache": true,"activeMenu": "/system/departMgt","icon": '',"breadcrumb": true,"affix": false,"is_local": false }', 'admin', '1');
INSERT INTO `admin_system`.`menus_table` (`id`, `pid`, `menusCode`, `companyId`, `departId`, `status`, `name`, `path`, `component`, `redirect`, `hidden`, `is_external_link`, `sortNo`, `meta`, `createName`, `createUserId`) VALUES ('12', '1', 'SYS_MGT_ROLE', '1', '1', '1', '角色管理', 'roleMgt', '/system/roleMgt/index', '/system/roleMgt/list', 'false', 'false', '5', '{"title": "角色管理","icon": '',"noCache": false,"breadcrumb": true,"affix": false,"activeMenu": ''}', 'admin', '1');
INSERT INTO `admin_system`.`menus_table` (`id`, `pid`, `menusCode`, `companyId`, `departId`, `status`, `name`, `path`, `component`, `hidden`, `is_external_link`, `sortNo`, `meta`, `createName`, `createUserId`) VALUES ('13', '12', 'SYS_MGT_ROLE_LIST', '1', '1', '1', '角色列表', 'list', '/system/roleMgt/list', 'true', 'false', '1', '{"title": "角色列表","noCache": true,"activeMenu": "/system/roleMgt","icon": '',"breadcrumb": true,"affix": false,"is_local": false}', 'admin', '1');
INSERT INTO `admin_system`.`menus_table` (`id`, `pid`, `menusCode`, `companyId`, `departId`, `status`, `name`, `path`, `hidden`, `is_external_link`, `sortNo`, `meta`, `createName`, `createUserId`) VALUES ('14', '0', 'SYS_TOOL', '1', '1', '1', '系统工具', '/systemTools', 'false', 'false', '2', '{"icon": "el-icon-s-cooperation","title": "系统工具","noCache": false,"breadcrumb": true,"affix": false,"activeMenu": '',"is_local": false}', 'admin', '1');
INSERT INTO `admin_system`.`menus_table` (`id`, `pid`, `menusCode`, `companyId`, `departId`, `status`, `name`, `path`, `component`, `redirect`, `hidden`, `is_external_link`, `sortNo`, `meta`, `createName`, `createUserId`) VALUES ('15', '14', 'SYS_TOOL_ICON', '1', '1', '1', '图标管理', 'iconsMgt', '/systemTools/iconsMgt/index', '/systemTools/iconsMgt/list', 'false', 'false', '1', '{"title": "图标管理","icon": '',"noCache": false,"breadcrumb": true,"affix": false,"activeMenu": '',"is_local": false}', 'admin', '1');
INSERT INTO `admin_system`.`menus_table` (`id`, `pid`, `menusCode`, `companyId`, `departId`, `status`, `name`, `path`, `component`, `hidden`, `is_external_link`, `sortNo`, `meta`, `createName`, `createUserId`) VALUES ('16', '15', 'SYS_TOOL_ICON_LIST', '1', '1', '1', '图标列表', 'list', '/systemTools/iconsMgt/list', 'true', 'false', '1', '{"title": "图标列表","noCache": true,"activeMenu": "/systemTools/iconsMgt","icon": '',"breadcrumb": true,"affix": false,"is_local": false}', 'admin', '1');
INSERT INTO `admin_system`.`menus_table` (`id`, `pid`, `menusCode`, `companyId`, `departId`, `status`, `name`, `path`, `component`, `redirect`, `hidden`, `is_external_link`, `sortNo`, `meta`, `createName`, `createUserId`) VALUES ('17', '14', 'SYS_TOOL_API', '1', '1', '1', '接口管理', 'apiMgt', '/systemTools/apiMgt/index', '/systemTools/apiMgt/list', 'false', 'false', '2', '{"title": "接口管理","icon": '', "noCache": false, "breadcrumb": true,"affix": false,"activeMenu": '',"is_local": false}', 'admin', '1');
INSERT INTO `admin_system`.`menus_table` (`id`, `pid`, `menusCode`, `companyId`, `departId`, `status`, `name`, `path`, `component`, `hidden`, `is_external_link`, `sortNo`, `meta`, `createName`, `createUserId`) VALUES ('18', '17', 'SYS_TOOL_API_LIST', '1', '1', '1', '接口列表', 'list', '/systemTools/apiMgt/list', 'true', 'false', '1', '{"title": "接口列表","noCache": true,"activeMenu": "/systemTools/apiMgt","icon": '',"breadcrumb": true,"affix": false,"is_local": false}', 'admin', '1');
INSERT INTO `admin_system`.`menus_table` (`id`, `pid`, `menusCode`, `companyId`, `departId`, `status`, `name`, `path`, `component`, `hidden`, `is_external_link`, `sortNo`, `meta`, `createName`, `createUserId`) VALUES ('19', '17', 'SYS_TOOL_API_DETAIL', '1', '1', '1', '接口详情', 'detail', '/systemTools/apiMgt/detail', 'true', 'false', '2', '{"title": "接口详情","noCache": true,"activeMenu": "/systemTools/apiMgt","icon": '',"breadcrumb": true,"affix": false,"is_local": false}', 'admin', '1');
INSERT INTO `admin_system`.`menus_table` (`id`, `pid`, `menusCode`, `companyId`, `departId`, `status`, `name`, `path`, `component`, `redirect`, `hidden`, `is_external_link`, `sortNo`, `meta`, `createName`, `createUserId`) VALUES ('20', '14', 'SYS_BUILD', '1', '1', '1', '打包管理', 'builMgt', '/systemTools/builMgt/index', '/systemTools/builMgt/list', 'false', 'false', '3', '{"title": "打包管理","icon": '',"noCache": false,"breadcrumb": false,"affix": false,"activeMenu": '',"is_local": true}', 'admin', '1');
INSERT INTO `admin_system`.`menus_table` (`id`, `pid`, `menusCode`, `companyId`, `departId`, `status`, `name`, `path`, `component`, `hidden`, `is_external_link`, `sortNo`, `meta`, `createName`, `createUserId`) VALUES ('21', '20', 'SYS_BUILD_LIST', '1', '1', '1', '打包配置', 'list', '/systemTools/builMgt/list', 'true', 'false', '1', '{"title": "打包配置","noCache": true,"activeMenu": "/systemTools/builMgt","icon": '',"breadcrumb": true,"affix": false,"is_local": true}', 'admin', '1');
INSERT INTO `admin_system`.`menus_table` (`id`, `pid`, `menusCode`, `companyId`, `departId`, `status`, `name`, `path`, `hidden`, `is_external_link`, `sortNo`, `meta`, `createName`, `createUserId`) VALUES ('22', '14', 'SYS_EXTER_GITHUB', '1', '1', '1', '外部链接', 'https://github.com/lanlianjiu/dome-element-admin', 'false', 'true', '4', '{"title": "外部链接","icon": '',"noCache": false,"breadcrumb": false,"affix": false,"activeMenu": '',"is_local": false}', 'admin', '1');

