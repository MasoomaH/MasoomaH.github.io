import express, {Request, Response, NextFunction} from "express";


export function UserDisplayName(req: Request) {

    // check is there is a user object attached to the request
    if(req.user){
        let user = req.user as UserDocument;
        return user.DisplayName.toString();
    }
    return '';
}

// Define a middleware function to protect routes that require authenticaiton
export function AuthGuard(req: Request, res: Response, next: NextFunction) : void {

    if(!req.isAuthenticated()){
        return res.redirect( '/login');
    }
    next();
}
