import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryPeopleService implements InMemoryDbService {

    createDb() {
        let people = [
            {
                "id": 1,
                "author": "Mr.Nice",
                "name": "<<Mr.Nice.Name>>",
                "price": 32,
                "state":"active"
            },
            {
                "id": 2,
                "author": "Narco",
                "name": "<<Narco Name>>",
                "price": 30,
                "state":"inactive"
            },
            {
                "id": "3",
                "author": "Dynama",
                "name": "<<Bombasto Fire>>",
                "price": 24,
                "state":"inactive"
            },
            {
                "id": 4,
                "author": "RubberMan",
                "name": "<<TorNado Leaf>>",
                "price": 20,
                "state":"inactive"
            }
        ];

        return { people };
    }
}