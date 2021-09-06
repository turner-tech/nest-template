import { ApiProperty } from '@nestjs/swagger';

export class RandomUser {
  @ApiProperty()
  gender: string;
  @ApiProperty()
  name: Name;
  @ApiProperty()
  location: Location;
  @ApiProperty()
  email: string;
  @ApiProperty()
  login: Login;
  @ApiProperty()
  dob: Dob;
  @ApiProperty()
  registered: Dob;
  @ApiProperty()
  phone: string;
  @ApiProperty()
  cell: string;
  @ApiProperty()
  id: ID;
  @ApiProperty()
  picture: Picture;
  @ApiProperty()
  nat: string;
}

export interface Dob {
  date: Date;
  age: number;
}

export interface ID {
  name: string;
  value: string;
}

export interface Location {
  street: Street;
  city: string;
  state: string;
  country: string;
  postcode: number;
  coordinates: Coordinates;
  timezone: Timezone;
}

export interface Coordinates {
  latitude: string;
  longitude: string;
}

export interface Street {
  number: number;
  name: string;
}

export interface Timezone {
  offset: string;
  description: string;
}

export interface Login {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}

export interface Name {
  title: string;
  first: string;
  last: string;
}

export interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}
