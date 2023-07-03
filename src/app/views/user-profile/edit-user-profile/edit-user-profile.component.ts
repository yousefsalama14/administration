import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserProfileService } from './../user-profile.service';
import { UserProfile } from 'src/app/core/model/UserProfile';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
declare var sizing: any;
declare var sayHello: any;
@Component({
  selector: 'app-edit-user-profile',
  templateUrl: './edit-user-profile.component.html',
  styleUrls: ['./edit-user-profile.component.css'],
})
export class EditUserProfileComponent implements OnInit {
  userProfileId = '0';
  userProfile: UserProfile;
  editUserProfileForm: FormGroup;
  constructor( private activatedRoute: ActivatedRoute,
              private userProfileService: UserProfileService,
              private fb: FormBuilder,
              private toastr: ToastrService
  ) {
    this.userProfile = this.initUserProfileObject();
    this.editUserProfileForm =this.initFormGroup();
  }
  ngOnInit(): void {
    sayHello()
    // sizing();
    this.findIdFromUrl();

  }
  findIdFromUrl() {
    this.activatedRoute.params.subscribe(
      (params) => (this.userProfileId = params['id'])
    );
    this.userProfileService.findUserProfileById(this.userProfileId).subscribe(
      (data: UserProfile) => {
        this.userProfile = data;
        this.patchData();
        console.log(data);
      },
      (error: Error) => console.log(error.message)
    );
  }

  saveUpdate() {
    console.log("save")
    console.log( this.editUserProfileForm.value)
    if(this.editUserProfileForm.valid){
      this.userProfile=this.editUserProfileForm.value
      this.userProfileService.updateUserProfile(this.userProfile).subscribe(
        (data:UserProfile)=>{this.userProfile=data
        this.toastr.success('Updated Successfully', 'Successfully')},
        (error:any)=>{this.toastr.error(error.error.message, 'Error')},
        ()=>console.log("Update Complete")
      )

    }
  }
  initUserProfileObject() {
    return {
      id: '',
      ususis:  '',
      departmentCode: '',
      usepno: '',
      ussncd: '',
      enName:  '',
      arName:  '',
      ususlg: '',
      usinmn: '',
      useptl: '',
      usarprt: '',
      uslaprt: '',
      active: false,
      uscrdt: new Date(),

      uslmdt: new Date(),

      usmttp: '',

      usmttm: new Date(),

      ususp1: '',
      uswsid: '',
      usflag: '',
      usvrford: '',
      usrstcnf: '',
      usvrfpcy: '',
      uspcyrsv: '',
      uspcymin: '',
      usvipapp: '',
      usvipact: '',
      usupddis: '',
      userrmod: '',
      usnscd: '',
      hospitalCode: '',
      usorderDep: '',
      ususpw: '',
      ususip: '',
      usstck: '',
      usustp: '',
      usadmn: '',
      usucdt: '',
      uscshr: '',
      ustllr: '',
      usdbuser: '',
      usactas: '',

      usdob: new Date(),

      usdobflg: '',
      userMrmType: '',
      userMrmCode: '',
      usmrmalwdtab: '',
      usmrmdeftab: 0,

      usrlgn: '',
      usmrmpw: '',
      usdptp: '',
      usdtau: '',
      usfnbl: '',
      usdlrg: '',
      usnsau: '',
      usupfn: '',
      usuppr: '',
      usvipadm: '',
      usappblkclr: '',
      usappblkbok: '',
      uswdrw: '',
      uscrtc: '',
      uschdr: '',
      usrfrn: '',
      usmdsh: '',
      uswlk: '',
      usdelapp: '',
      usrmch: '',
      cancelPeriod: '',
      cancelPeriodHour: 0,

      uscmds: '',
      mandatorytabs: '',
      usmsgr: '',
      usupfb: '',
      usnsmt: '',
      usphmt: '',
      usrdmt: '',
      uslbmt: '',
      usbbmt: '',
      usrsmt: '',
      skinsId: '',
      usdptr: '',
      usexcl: '',
      uscltp: '',
      uschgday: 0,

      usupfc: '',
      usaptp: '',
      usprvo: '',
      credit: '',
      userGroup: '',
      usudis: '',
      usptlm: '',
      usitmpk: '',
      uschon: '',
      usufpt: '',
      usupbt: '',
      usodlv: '',
      usfutr: '',
      uscroslab: '',
      uscdis: '',
      usjbcd: '',
      usrepr: '',
      usdbaf: '',
      uspwex: '',
      usexdy: 0,

      usexdt: new Date(),

      usrtdg: '',
      uschad: '',
      uschga: '',
      usalrt: '',
      usacus: '',
      usacpw: '',

      changeFcFromCash: '',
      changeFcFromCredit: '',
      changeFcFromBoth: '',
      updateFcFromCash: '',
      updateFcFromCredit: '',
      updateFcFromBoth: '',
      blackListStatus: '',
      email: '',

      code: '',
      adminUserWeb: '',
      //if equals to "Y", then the user can't add new Item to order ..
      addNewItemToOrderFalg: '',
      userDeposit: '',
      userDepositFlag: false,
      uswdrwFlag: false,
      cancelPeriodFlag: false,
    };
  }
  patchData(){
    this.editUserProfileForm.patchValue({
     id: this.userProfile.id,
      departmentCode:this.userProfile.departmentCode,
      enName:this.userProfile.enName,
      arName:this.userProfile.arName,
      usepno:this.userProfile.usepno,
      ususlg:this.userProfile.ususlg,
      usdob:this.userProfile.usdob,
      email:this.userProfile.email
    });
  }
  initFormGroup(){
return this.fb.group({
  id:  [''],
  departmentCode:  [''],
  enName:  ['',Validators.required],
  arName:  ['',Validators.required],
  usepno:  ['',Validators.required],
  ususlg:  [''],
  usdob:   ['',Validators.required],
  email: ['',[ Validators.required,Validators.email]],

  ususis:  [''],


  ussncd:  [''],


  usinmn:  [''],
  useptl:  [''],
  usarprt:  [''],
  uslaprt:  [''],
  active:  [''],
  uscrdt: [''],

  uslmdt: [''],

  usmttp:  [''],

  usmttm: [''],

  ususp1:  [''],
  uswsid:  [''],
  usflag:  [''],
  usvrford:  [''],
  usrstcnf:  [''],
  usvrfpcy:  [''],
  uspcyrsv:  [''],
  uspcymin:  [''],
  usvipapp:  [''],
  usvipact:  [''],
  usupddis:  [''],
  userrmod:  [''],
  usnscd:  [''],
  hospitalCode:  [''],
  usorderDep:  [''],
  ususpw:  [''],
  ususip:  [''],
  usstck:  [''],
  usustp:  [''],
  usadmn:  [''],
  usucdt:  [''],
  uscshr:  [''],
  ustllr:  [''],
  usdbuser:  [''],
  usactas:  [''],



  usdobflg:  [''],
  userMrmType:  [''],
  userMrmCode:  [''],
  usmrmalwdtab:  [''],
  usmrmdeftab: 0,

  usrlgn:  [''],
  usmrmpw:  [''],
  usdptp:  [''],
  usdtau:  [''],
  usfnbl:  [''],
  usdlrg:  [''],
  usnsau:  [''],
  usupfn:  [''],
  usuppr:  [''],
  usvipadm:  [''],
  usappblkclr:  [''],
  usappblkbok:  [''],
  uswdrw:  [''],
  uscrtc:  [''],
  uschdr:  [''],
  usrfrn:  [''],
  usmdsh:  [''],
  uswlk:  [''],
  usdelapp:  [''],
  usrmch:  [''],
  cancelPeriod:  [''],
  cancelPeriodHour: 0,

  uscmds:  [''],
  mandatorytabs:  [''],
  usmsgr:  [''],
  usupfb:  [''],
  usnsmt:  [''],
  usphmt:  [''],
  usrdmt:  [''],
  uslbmt:  [''],
  usbbmt:  [''],
  usrsmt:  [''],
  skinsId:  [''],
  usdptr:  [''],
  usexcl:  [''],
  uscltp:  [''],
  uschgday: 0,

  usupfc:  [''],
  usaptp:  [''],
  usprvo:  [''],
  credit:  [''],
  userGroup:  [''],
  usudis:  [''],
  usptlm:  [''],
  usitmpk:  [''],
  uschon:  [''],
  usufpt:  [''],
  usupbt:  [''],
  usodlv:  [''],
  usfutr:  [''],
  uscroslab:  [''],
  uscdis:  [''],
  usjbcd:  [''],
  usrepr:  [''],
  usdbaf:  [''],
  uspwex:  [''],
  usexdy: 0,

  usexdt: new Date(),

  usrtdg:  [''],
  uschad:  [''],
  uschga:  [''],
  usalrt:  [''],
  usacus:  [''],
  usacpw:  [''],

  changeFcFromCash:  [''],
  changeFcFromCredit:  [''],
  changeFcFromBoth:  [''],
  updateFcFromCash:  [''],
  updateFcFromCredit:  [''],
  updateFcFromBoth:  [''],
  blackListStatus:  [''],


  code:  [''],
  adminUserWeb:  [''],
  //if equals to "Y", then the user can't add new Item to order ..
  addNewItemToOrderFalg:  [''],
  userDeposit:  [''],
  userDepositFlag: false,
  uswdrwFlag: false,
  cancelPeriodFlag: false,
});
  }
}
