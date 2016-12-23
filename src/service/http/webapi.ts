import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryPeopleService implements InMemoryDbService {

    createDb() {
        let people = [
            {
                "id": 1,
                "nick": "Mr.Nice",
                "name": "Mr.Nice.Name",
                "age": 32,
                "state":"active"
            },
            {
                "id": 2,
                "nick": "Narco",
                "name": "Narco Name",
                "age": 30,
                "state":"inactive"
            },
            {
                "id": "3",
                "nick": "Dynama",
                "name": "Bombasto Fire",
                "age": 24,
                "state":"inactive"
            },
            {
                "id": 4,
                "nick": "RubberMan",
                "name": "TorNado Leaf",
                "age": 20,
                "state":"inactive"
            }
        ];

        return { people };
    }
}