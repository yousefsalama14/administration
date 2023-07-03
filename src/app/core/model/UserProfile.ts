export interface UserProfile {
  id: string;
  ususis: string;
  departmentCode: string;
  usepno: string;
  ussncd: string;
  enName: string;
  arName: string;
  ususlg: string;
  usinmn: string;
  useptl: string;
  usarprt: string;
  uslaprt: string;
  active: boolean;
  uscrdt: Date;

  uslmdt: Date;

  usmttp: string;

  usmttm: Date;

  ususp1: string;
  uswsid: string;
  usflag: string;
  usvrford: string;
  usrstcnf: string;
  usvrfpcy: string;
  uspcyrsv: string;
  uspcymin: string;
  usvipapp: string;
  usvipact: string;
  usupddis: string;
  userrmod: string;
  usnscd: string;
  hospitalCode: string;
  usorderDep: string;
  ususpw: string;
  ususip: string;
  usstck: string;
  usustp: string;
  usadmn: string;
  usucdt: string;
  uscshr: string;
  ustllr: string;
  usdbuser: string;
  usactas: string;

  usdob: Date;

  usdobflg: string;
  userMrmType: string;
  userMrmCode: string;
  usmrmalwdtab: string;
  usmrmdeftab: number;

  usrlgn: string;
  usmrmpw: string;
  usdptp: string;
  usdtau: string;
  usfnbl: string;
  usdlrg: string;
  usnsau: string;
  usupfn: string;
  usuppr: string;
  usvipadm: string;
  usappblkclr: string;
  usappblkbok: string;
  uswdrw: string;
  uscrtc: string;
  uschdr: string;
  usrfrn: string;
  usmdsh: string;
  uswlk: string;
  usdelapp: string;
  usrmch: string;
  cancelPeriod: string;
  cancelPeriodHour: number;

  uscmds: string;
  mandatorytabs: string;
  usmsgr: string;
  usupfb: string;
  usnsmt: string;
  usphmt: string;
  usrdmt: string;
  uslbmt: string;
  usbbmt: string;
  usrsmt: string;
  skinsId: string;
  usdptr: string;
  usexcl: string;
  uscltp: string;
  uschgday: number;

  usupfc: string;
  usaptp: string;
  usprvo: string;
  credit: string;
  userGroup: string;
  usudis: string;
  usptlm: string;
  usitmpk: string;
  uschon: string;
  usufpt: string;
  usupbt: string;
  usodlv: string;
  usfutr: string;
  uscroslab: string;
  uscdis: string;
  usjbcd: string;
  usrepr: string;
  usdbaf: string;
  uspwex: string;
  usexdy: number;

  usexdt: Date;

  usrtdg: string;
  uschad: string;
  uschga: string;
  usalrt: string;
  usacus: string;
  usacpw: string;

  changeFcFromCash: string;
  changeFcFromCredit: string;
  changeFcFromBoth: string;
  updateFcFromCash: string;
  updateFcFromCredit: string;
  updateFcFromBoth: string;
  blackListStatus: string;
  email: string;

  code: string;
  adminUserWeb: string;
  //if equals to "Y", then the user can't add new Item to order ..
  addNewItemToOrderFalg: string;
  userDeposit: string;
  userDepositFlag: boolean;
  uswdrwFlag: boolean;
  cancelPeriodFlag: boolean;
}
