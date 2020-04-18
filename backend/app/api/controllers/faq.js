const faqModel = require('../models/faq');

module.exports = {
    getById: function (req, res, next) {
        faqModel.findById(req.params.faqId, function (err, faqInfo) {
            if (err) {
                next(err)
            } else {
                res.json({
                    status: "Success",
                    message: "Faq question found",
                    data: {
                        faq: faqInfo
                    }
                })
            }
        })
    },

    getAll: function (req, res, next) {
        let faqList = [];
        faqModel.find({}, function (err, faqs) {
            if (err) {
                next(err)
            } else {
                for (let faq of faqs) {
                    faqList.push({
                        id: faq.id,
                        question: faq.question,
                        answer: faq.answer
                    })
                }
                res.json({
                    status: "success",
                    message: "Found list of faqs",
                    data: faqList
                })
            }
        })
    },

    create: function (req, res, next) {
        faqModel.create({question: req.body.question, answer: req.body.answer}, function (err, faq) {
            if(err){
                next(err);
            }else {
                res.json({
                    status: "success",
                    message: "Created A Faq",
                    data:{
                        question: faq.question,
                        answer: faq.answer
                    }
                })
            }
        })
    },

    delete: function (req, res, next) {
        faqModel.findByIdAndRemove(req.params.faqId, function (err, faq) {
            if(err){
                next(err);
            }else{
                res.json({
                    status: "success",
                    message: "Faq Deleted",
                    data: faq
                })
            }
        })
    }
}