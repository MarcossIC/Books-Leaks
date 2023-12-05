package com.noCountry.library.controller;

import com.noCountry.library.dto.Book.*;
import org.springframework.web.bind.annotation.RestController;

import com.noCountry.library.service.impl.BookServiceImpl;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/book")
public class BookController {

    private final BookServiceImpl bookService;

    @Autowired
    public BookController(BookServiceImpl bookService) {
        this.bookService = bookService;
    }


    @GetMapping(path = "/{id}")
    public ResponseEntity<?> getBookById(@PathVariable String id) throws Exception {
        try {
            BookResponse book = bookService.getBookById(id);
            return new ResponseEntity<>(book, HttpStatus.OK);
        } catch (Exception e){
            throw new Exception(e.getMessage());
        }
    }

    @GetMapping(path = "/allBooks"
    )
    public ResponseEntity<?> getAllBooks(@RequestParam(defaultValue = "0") int page,
                                         @RequestParam(defaultValue = "5") int size) throws Exception {
        try {
            PaginatedBookResponseDTO<BookResponse> books = bookService.getAllBooks(page, size);
            return new ResponseEntity<>(books, HttpStatus.OK);
        } catch (Exception e){
            throw new Exception(e.getMessage());
        }
    }

    @GetMapping(path = "/toCard/{id}")
    public ResponseEntity<?> getBookByIdToCard(@PathVariable String id) throws Exception {
        try {
            BookCardResponse book = bookService.getBookForCard(id);
            return new ResponseEntity<>(book, HttpStatus.OK);
        } catch (Exception e){
            throw new Exception(e.getMessage());
        }
    }

    @GetMapping(path = "/toCard/allBooks")
    public ResponseEntity<?> getAllBooksToCard(@RequestParam(defaultValue = "0") int page,
                                               @RequestParam(defaultValue = "5") int size) throws Exception {
        try {
            PaginatedBookResponseDTO<BookCardResponse> books = bookService.getAllBooksForCard(page, size);
            return new ResponseEntity<>(books, HttpStatus.OK);
        } catch (Exception e){
            throw new Exception(e.getMessage());
        }
    }

    @PostMapping(path = "/createBook")
    public ResponseEntity<?> createBook(@RequestBody @Valid BookRequest bookRequest) throws Exception {
        try {
            BookResponse bookResponse = bookService.createdBook(bookRequest);
            return new ResponseEntity<>(bookResponse, HttpStatus.CREATED);
        } catch (Exception e){
            throw new Exception(e.getMessage());
        }
    }

    @PostMapping(path = "/addImage/{id}")
    public ResponseEntity<?> addImageAtBook(@RequestBody @Valid UrlImage image, @PathVariable String id) throws Exception {
        try {
            bookService.addImagesBook(id, image.getImage());
            return new ResponseEntity<>(HttpStatus.CREATED);
        } catch (Exception e){
            throw new Exception(e.getMessage());
        }
    }

    // Endpoint temporal hasta q este la clase ventas
    @PostMapping(path = "/{id}/quatityAvaible/{amount}")
    public ResponseEntity<?> addQuantityAvailable(@PathVariable String id, @PathVariable Integer amount) throws Exception {
        try {
            BookResponse book = bookService.addQuantityAvailable(id, amount);
            return new ResponseEntity<>(book, HttpStatus.CREATED);
        } catch (Exception e){
            throw new Exception(e.getMessage());
        }
    }

    // Endpoint temporal hasta q este la clase ventas
    @PostMapping(path = "/{id}/subtractAmount/{amount}")
    public ResponseEntity<?> subtractAmount(@PathVariable String id, @PathVariable Integer amount) throws Exception {
        try {
            BookResponse book = bookService.subtractAmount(id, amount);
            return new ResponseEntity<>(book, HttpStatus.CREATED);
        } catch (Exception e){
            throw new Exception(e.getMessage());
        }
    }

    @PutMapping(path = "/{id}/vote/{vote}")
    public ResponseEntity<?> addVote(@PathVariable String id, @PathVariable Integer vote) throws Exception {
        try {
            BookResponse book = bookService.addVote(id, vote);
            return new ResponseEntity<>(book, HttpStatus.CREATED);
        } catch (Exception e){
            throw new Exception(e.getMessage());
        }
    }


    @DeleteMapping(path = "/{id}")
    public ResponseEntity<?> deleteBook(@PathVariable String id) throws Exception {
        try {
            bookService.deleteBook(id);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e){
            throw new Exception(e.getMessage());
        }
    }

    @GetMapping(path = "/searchGenre/{genre}")
    public ResponseEntity<?> getBookByGenre(@PathVariable String genre,
                                            @RequestParam(defaultValue = "0") int page,
                                            @RequestParam(defaultValue = "5") int size) throws Exception {
        try {
            PaginatedBookResponseDTO<BookResponse> book = bookService.searchByGenre(genre, page, size);
            return new ResponseEntity<>(book, HttpStatus.OK);
        } catch (Exception e){
            throw new Exception(e.getMessage());
        }
    }

    @GetMapping(path = "/searchTrend")
    public ResponseEntity<?> getBookByTrend() throws Exception {
        try {
            List<BookResponse> book = bookService.searchByTrend();
            return new ResponseEntity<>(book, HttpStatus.OK);
        } catch (Exception e){
            throw new Exception(e.getMessage());
        }
    }

    @GetMapping(path = "/searchHighestRating")
    public ResponseEntity<?> getBookBy() throws Exception {
        try {
            List<BookResponse> book = bookService.searchByHighestRating();
            return new ResponseEntity<>(book, HttpStatus.OK);
        } catch (Exception e){
            throw new Exception(e.getMessage());
        }
    }

    @GetMapping(path = "/searchAuthor/{idAuthor}")
    public ResponseEntity<?> getBookByAuthor(@PathVariable String idAuthor) throws Exception {
        try {
            List<BookResponse> book = bookService.searchByAuthor(idAuthor);
            return new ResponseEntity<>(book, HttpStatus.OK);
        } catch (Exception e){
            throw new Exception(e.getMessage());
        }
    }

    @GetMapping(path = "/searchEditorial/{idEditorial}")
    public ResponseEntity<?> getBookByEditorial(@PathVariable String idEditorial) throws Exception {
        try {
            List<BookResponse> book = bookService.searchByEditorial(idEditorial);
            return new ResponseEntity<>(book, HttpStatus.OK);
        } catch (Exception e){
            throw new Exception(e.getMessage());
        }
    }

    @GetMapping(path = "/searchTitle/{title}")
    public ResponseEntity<?> getBookByTitle(@PathVariable String title) throws Exception {
        try {
            List<BookResponse> book = bookService.searchByTitle(title);
            return new ResponseEntity<>(book, HttpStatus.OK);
        } catch (Exception e){
            throw new Exception(e.getMessage());
        }
    }

}
