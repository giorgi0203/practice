import { AuthResponse } from '@auth/store/models';

export function saveToken(authResponse: AuthResponse) {
    localStorage.setItem("auth", JSON.stringify({ ...authResponse }));
}

export function getToken() {
    let token = handleStorageRead().token;
    if (token && token != "") {
        return token;
    } else {
        return "";
    }
}

function handleStorageRead() {
    const raw = localStorage.getItem("auth");
    let parsed;
    try {
        parsed = JSON.parse(raw);
    } catch (error) {
        console.log("parsin error");
        return "";
    }

    return parsed ? parsed : { email: "", token: "" };
}

export function getEmail() {
    let email = handleStorageRead().email;

    if (email && email != "") {
        return email;
    } else {
        return "";
    }
}