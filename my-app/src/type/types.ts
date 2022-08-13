import { Unsubscribe } from "@firebase/auth";// @으로 임포트 해오면 해당 타입들이 적혀져 있다.

export interface Date {
    day: number;
}

export interface Weekday {
    letter:string;
    
}

export interface homeProps {
    isLoggedIn : boolean,
    userObj : Unsubscribe | {}
  }  