const movieModel = require('../models/movies');
module.exports = {
    getById: function (req, res, next) {
        console.log(req.body);
        movieModel.findById(req.params.movieId, function (err, movieInfo) {
            if (err) {
                next(err);
            } else {
                res.json({status: "success", message: "Movie found!!!", data: {movies: movieInfo}});
            }
        });
    },
    getAll: function (req, res, next) {
        let moviesList = [];
        movieModel.find({}, function (err, movies) {
            if (err) {
                next(err);
            } else {
                for (let movie of movies) {
                    moviesList.push({id: movie._id, name: movie.name, released_on: movie.released_on});
                }
                res.json({status: "success", message: "Movies list found!!!", data: {movies: moviesList}});

            }
        });
    },
    updateById: function (req, res, next) {
        movieModel.findByIdAndUpdate(req.params.movieId, {name: req.body.name}, {new: true}, function (err, movieInfo) {
            if (err)
                next(err);
            else {
                res.json({
                    status: "success",
                    message: "Movie updated successfully!!!",
                    data: {name: movieInfo.name, released_on: movieInfo.released_on}
                });
            }
        });
    },
    deleteById: function (req, res, next) {
        movieModel.findByIdAndRemove(req.params.movieId, function (err, movieInfo) {
            if (err)
                next(err);
            else {
                res.json({status: "success", message: "Movie deleted successfully!!!", data: {movieInfo}});
            }
        });
    },
    create: function (req, res, next) {
        movieModel.create({name: req.body.name, released_on: req.body.released_on}, function (err, result) {
            if (err)
                next(err);
            else
                res.json({
                    status: "success", message: "Movie added successfully!!!", data: {
                        name: result.name,
                        released_on: result.released_on
                    }
                });

        });
    },
}