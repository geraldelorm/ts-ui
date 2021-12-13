 export interface LoginResponse{
  userId:number;
  firstName:string;
  lastName:string;
  email:string;
  userRole:string;
  authenticationToken:string;
  refreshToken:string;
  expiresAt :Date;
 }
