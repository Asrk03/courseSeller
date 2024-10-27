exports.handleError = (err, res) => {
    res.status(500).json({ message: 'Server Error', error: err.message });
    console.log(err.message);
  };
  