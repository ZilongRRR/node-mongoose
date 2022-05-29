const { headers } = require('./const');

function errorHandle(res) {
  res.writeHead(404, headers);
  res.write(
    JSON.stringify({
      status: 'false',
      message: '欄位未填寫正確',
    })
  );
  res.end();
}

function successHandle(res, posts) {
  res.writeHead(200, headers);
  if (posts) {
    res.write(
      JSON.stringify({
        status: 'success',
        data: posts,
      })
    );
  } else {
    res.write(
      JSON.stringify({
        status: 'success',
      })
    );
  }
  res.end();
}

module.exports = { errorHandle, successHandle };
