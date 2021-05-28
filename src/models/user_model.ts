export interface IUserName {
	first?: string;
	full: string;
}

export interface IUser {
	createdAt?: Date;
	email?: string;
	id?: string;
	image?: string;
	name?: IUserName;
}
