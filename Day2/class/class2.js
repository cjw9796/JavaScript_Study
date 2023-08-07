
class MemberMenu{
    mainMenu(){
        while(true){
            let sel = prompt('번호를 입력하세요')
            console.log('1.회원가입');
            console.log('2.로그인');
            console.log('3.같은이름 회원 찾기')
            console.log('9.종료')
            switch(sel){
                case 1: {
                    this.joinMemberShip();
                    break;
                }
                case 2: {
                    this.login();
                    break;
                }
                case 3: {
                    this.sameName();
                    break;
                }
                case 9: {
                    console.log('종료');
                    return;
                }
                default: {
                    console.log('잘못입력했습니다.');

                }
            }


        }

    }

    memberMenu(){
        while(true){
            let sel = prompt('메뉴 번호 입력');
            console.log('1.비밀번호 바꾸기');
            console.log('2.이름 바꾸기')
            console.log('3.로그아웃');
            switch(sel){
                case 1:{
                    this.changePassword();
                    break;
                }
                case 2:{
                    this.changeName();
                    break;
                }
                case 3:{
                    console.log('로그아웃 되었습니다.')
                    return;
                }
                default: {
                    console.log('잘못입력했습니다.');
                }
            }
       }
    }

    joinMemberShip(){
        let id = prompt("아이디:");
        let password = prompt("비밀번호:");
        let name = prompt("이름");
        
    }

    login(){
        function login(id,password){
            if (id==loginid && password==loginpassword) {
                return console.log(name+"님 환영합니다.")
               } else {
                return console.log('틀린 아이디 또는 비밀번호 입니다. 다시 입력하세요.')
               }  
        }

        let loginid = prompt("아이디:");
        let loginpassword = prompt("비밀번호:")
       
    }

    changePassword(){
        function changepw(password){
            
        }
    }

    changeName(){
        console.log('아이디');
        console.log('비밀번호');
        console.log('이름')
    }

    sameName(){
        console.log('아이디');
        console.log('비밀번호');
        console.log('이름')
    }
}

const MM = new MemberMenu();
MM.mainMenu();

class Member extends MemberMenu{

    _password;
    _name;

    constructor(password, name){
        this._name = name;
        this._password = password;
    }

    
}