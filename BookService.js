'use strict';


/**
 * Add a new book to the library
 * Add a new book to the library
 *
 * body Book Create a new book in the library
 * returns Book
 **/
exports.addBook = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "photoUrls" : "",
  "Author" : "Author",
  "id" : 10,
  "title" : "FIVE FEET APART",
  "status" : "available"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Add a new book to the library
 * Add a new book to the library
 *
 * body Book Create a new book in the library
 * returns Book
 **/
exports.addBook = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "photoUrls" : "",
  "Author" : "Author",
  "id" : 10,
  "title" : "FIVE FEET APART",
  "status" : "available"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Deletes a book
 * delete a book
 *
 * bookId Long Book id to delete
 * api_key String  (optional)
 * no response value expected for this operation
 **/
exports.deleteBook = function(bookId,api_key) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * retrieve list of books by id
 * Multiple id values can be provided with comma separated strings
 *
 * status String Status values that need to be considered for filter (optional)
 * returns List
 **/
exports.findBooksByid = function(status) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "photoUrls" : "",
  "Author" : "Author",
  "id" : 10,
  "title" : "FIVE FEET APART",
  "status" : "available"
}, {
  "photoUrls" : "",
  "Author" : "Author",
  "id" : 10,
  "title" : "FIVE FEET APART",
  "status" : "available"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Find book by ID
 * Retrieves a book
 *
 * bookId Long ID of book to return
 * returns Book
 **/
exports.getBookById = function(bookId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "photoUrls" : "",
  "Author" : "Author",
  "id" : 10,
  "title" : "FIVE FEET APART",
  "status" : "available"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update an existing book in library
 * Update an existing book by Id
 *
 * body Book Update an existent book in the library
 * returns Book
 **/
exports.updateBook = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "photoUrls" : "",
  "Author" : "Author",
  "id" : 10,
  "title" : "FIVE FEET APART",
  "status" : "available"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update an existing book in library
 * Update an existing book by Id
 *
 * body Book Update an existent book in the library
 * returns Book
 **/
exports.updateBook = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "photoUrls" : "",
  "Author" : "Author",
  "id" : 10,
  "title" : "FIVE FEET APART",
  "status" : "available"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Updates a book in the library with form data
 *
 * bookId Long ID of book that needs to be updated
 * name String Name of pet that needs to be updated (optional)
 * status String Status of pet that needs to be updated (optional)
 * no response value expected for this operation
 **/
exports.updateBookWithForm = function(bookId,name,status) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * uploads an image
 *
 * body Object  (optional)
 * additionalMetadata String Additional Metadata (optional)
 * bookId Long ID of book to update
 * returns ApiResponse
 **/
exports.uploadFile = function(body,additionalMetadata,bookId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : 0,
  "type" : "type",
  "message" : "message"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

