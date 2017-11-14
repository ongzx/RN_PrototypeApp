const ApiUtils = {
    checkStatus: function(response) {
      if (response.status >= 200 && response.status < 300) {
        return response.text();
      } else {
        let error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
    }
  };
  

export default Api = {
    fetchTopic: (baseUrl, categoryId, companyId, userId, topicId, apiKey) => {
        return fetch(baseUrl+'/RS/GetRSTopic', {
            method: 'POST',
            headers: {
                'X-UserKey': userId,
                'X-ApiKey': apiKey,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "CategoryId":categoryId,
                "CompanyId":companyId,
                "RequesterUserId":userId,
                "TopicId":topicId
            })
            .then(ApiUtils.checkStatus)
            .then((response) => {
                var json = JSON.parse(response);
                if (json.Success) {
                    return json;
                } else {
                    throw(json);
                }
            })
            .catch((error) => {
                throw(error);
            })
        })
    },
    answerCard: (baseUrl, userId, cardId, categoryId, companyId, topicId, optionIds, apiKey, isSkipped) => {
        return fetch(baseUrl+'/RS/AnswerCard', {
            method: 'POST',
            headers: {
                'X-UserKey': userId,
                'X-ApiKey': apiKey,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "AnsweredUserId": userId,
                "CardId": cardId,
                "CategoryId":categoryId,
                "CompanyId":companyId,
                "IsSkipped": isSkipped,
                "OptionIds":optionIds,
                "TopicId":topicId
            })
            .then(ApiUtils.checkStatus)
            .then((response) => {
                var json = JSON.parse(response);
                if (json.Success) {
                    return json;
                } else {
                    throw(json);
                }
            })
            .catch((error) => {
                throw(error);
            })
        })
    },
    createFeedback: (baseUrl, userId, categoryId, companyId, topicId, feedback, apiKey) => {
        return fetch(baseUrl+'/RS/createfeedback', {
            method: 'POST',
            headers: {
                'X-UserKey': userId,
                'X-ApiKey': apiKey,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "RequesterUserId": userId,
                "CategoryId":categoryId,
                "CompanyId":companyId,
                "Feedback": isSkipped,
                "TopicId":topicId
            })
            .then(ApiUtils.checkStatus)
            .then((response) => {
                var json = JSON.parse(response);
                if (json.Success) {
                    return json;
                } else {
                    throw(json);
                }
            })
            .catch((error) => {
                throw(error);
            })
        })        
    },
    updateCompletion: (baseUrl, userId, categoryId, companyId, topicId, apiKey) => {
        return fetch(baseUrl+'/RS/UpdateCompletion', {
            method: 'POST',
            headers: {
                'X-UserKey': userId,
                'X-ApiKey': apiKey,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "RequesterUserId": userId,
                "CategoryId":categoryId,
                "CompanyId":companyId,
                "TopicId":topicId
            })
            .then(ApiUtils.checkStatus)
            .then((response) => {
                var json = JSON.parse(response);
                if (json.Success) {
                    return json;
                } else {
                    throw(json);
                }
            })
            .catch((error) => {
                throw(error);
            })
        })
    }
}