interface IUser {
  getName(): string
  getAge(): number
}

class User implements IUser{
  protected userName: string

  protected userYearOfBirth: number

   constructor(name: string, age: number) {
    this.userName = name
    this.userYearOfBirth = this.getYear(age)
  }
  getAge():number {
    return new Date().getFullYear() - this.userYearOfBirth
  }


  getName () {
    return this.userName
  }
  protected getYear(userAge: number) {
    return new Date().getFullYear() - userAge;
  }
  
}

const user = new User('Sergey', 34)

function getUserInfo (user: IUser) {
  console.log(user.getName() + ', полных лет ' + user.getAge())
}



getUserInfo(user)