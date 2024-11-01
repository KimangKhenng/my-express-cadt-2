
// The name of each response payload should be model name defined in Request model schema.

// The name of each response payload should be  model name defined in Request model schema and should sufix with ResponseModel.

module.exports = {
    createBook: {
        200: {
            docs: [],
            totalDocs: {
                type: Number
            },
            limit: {
                type: Number
            },
            totalPages: {
                type: Number
            },
            page: {
                type: Number
            },
            pagingCounter: {
                type: Number
            },
            hasPrevPage: {
                type: Boolean
            },
            hasNextPage: {
                type: Boolean
            },
            prevPage: {
                type: String
            },
            nextPage: {
                type: String
            }
        },
        201: {
            message: {
                type: 'Successfully created book'
            }
        },
        500: {
            internal: {
                type: 'Internal server error!'
            }
        }
    },
    getAllBooks: {
        200: {
            docs: [],
            totalDocs: {
                type: Number
            },
            limit: {
                type: Number
            },
            totalPages: {
                type: Number
            },
            page: {
                type: Number
            },
            pagingCounter: {
                type: Number
            },
            hasPrevPage: {
                type: Boolean
            },
            hasNextPage: {
                type: Boolean
            },
            prevPage: {
                type: String
            },
            nextPage: {
                type: String
            }
        }
    }
};