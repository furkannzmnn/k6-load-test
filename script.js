import http from 'k6/http';
import { sleep } from 'k6';

const options = {
    vus: 10,
    duration: '30s'
};
export default function () {
    //http://localhost:8083/api/user/save //POST

    var url = 'http://localhost:8083/api/user/save';
    var payload = JSON.stringify({
        name: 'test',
        email: 'oz@gmail.com',
        userSurname: 'test',
        userName: 'test',
    });

    var params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    http.post(url, payload, params);
    sleep(1);
}
