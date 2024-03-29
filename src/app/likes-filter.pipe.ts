import {  PipeTransform, Pipe } from '@angular/core';
import { IUser } from './user';

@Pipe({
    name: 'likesFilter'
})
export class LikesFilterPipe implements PipeTransform {

    transform(value: IUser[], filterBy: number): IUser[] {
        filterBy = filterBy ? filterBy : null;
        return filterBy ? value.filter((user: IUser) =>
            user.avgLikes > filterBy) : value;

            
    }

}
