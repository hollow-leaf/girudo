import { UserInfo } from "@/type";
import { serverlessHost } from "./common";
import { DAO, task } from "@/app/type";

export async function saltByUserIdToken(sub: string): Promise<{salt: string, userInfo: UserInfo}> {

    const response = await fetch(serverlessHost + "/user/info", {
       method: 'POST',
       body: JSON.stringify({
        "sub": sub
       })
    });

    const result = await response.json();

    if(result.length > 0) {
        return {salt: result[0].user_salt, userInfo: {username: result[0].user_name, avater: "", email: result[0].user_email, suiAddress: ""}}
    } else {
        return {salt: "", userInfo: {username: "", avater: "", email: "", suiAddress: ""}}
    }
}

export async function setSaltByUserIdToken(sub: string, salt: string, userInfo: UserInfo): Promise<boolean> {

    const response = await fetch(serverlessHost + "/user/new", {
        method: 'POST',
        body: JSON.stringify({
            "sub": sub,
            "user_name": userInfo.username,
            "user_email": userInfo.email,
            "user_salt": salt
           })
    });
    if(response.status == 200) {
        return true
    } else {
        return false
    }
}

export async function daoByUserID(sub: string): Promise<DAO[]> {
    const response = await fetch(serverlessHost + "/user/dao", {
        method: 'POST',
        body: JSON.stringify({
            "sub": sub,
        })
    });
    if(response.status == 200) {
        const r = await response.json()
        return r
    } else {
        return []
    }
}

export async function taskByUserID(sub: string): Promise<task[]> {
    const response = await fetch(serverlessHost + "/user/task", {
        method: 'POST',
        body: JSON.stringify({
            "sub": sub,
        })
    });
    if(response.status == 200) {
        const r = await response.json()
        console.log(r)
        return r
    } else {
        return []
    }
}