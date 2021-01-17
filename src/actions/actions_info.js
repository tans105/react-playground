export const INFO_FETCHED = 'INFO_FETCHED';

export function fetchInfo() {
    return (dispatch) => {
        fetch('http://www.json-generator.com/api/json/get/bVGbNZouuW?intent=2', {
            method: 'GET'
        })
            .then(response => response.json())
            .then(json => {
                console.log(json);
                dispatch(loadInfo(json))
            })
            .catch(err => console.log(err));
    }
}

export function loadInfo(result) {
    return {
        type: INFO_FETCHED,
        payload: result
    }
}