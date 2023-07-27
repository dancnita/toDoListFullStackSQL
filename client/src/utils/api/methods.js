async function getData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      const msg = `error: ${response.status}`;
      throw new Error(msg);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}
async function postData(url, dataToPost) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
    body: JSON.stringify({ name: `${dataToPost}` }),
  };

  try {
    const response = await fetch(url, requestOptions);
    if (!response.ok) {
      const msg = `error: ${response.status}`;
      throw new Error(msg);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}

async function deleteData(url, id) {
  const requestOptions = {
    method: 'DELETE',
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
    body: JSON.stringify({ id: `${id}` }),
  };
  try {
    const response = await fetch(url, requestOptions);
    if (!response.ok) {
      const msg = `error: ${response.status}`;
      throw new Error(msg);
    }
    const result = await response.json();
    return response;
  } catch (error) {
    console.log(error);
  }
}

async function patchData(id, dataToPatch, url) {
  const requestOptions = {
    method: 'PATCH',
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
    body: JSON.stringify({ id: `${id}`, description: `${dataToPatch}` }),
  };

  try {
    const response = await fetch(url, requestOptions);
    if (!response.ok) {
      const msg = `error: ${response.status}`;
      throw new Error(msg);
    }
    const result = await response.json();
    return response;
  } catch (error) {
    console.log(error);
  }
}

export { getData, deleteData, postData, patchData };
