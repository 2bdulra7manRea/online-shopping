import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BaseService } from "./base.service";


@Injectable()
export class UserService extends BaseService {


constructor(protected http:HttpClient){
    super(http);
}








}