# Movie App

This directory contains the description of the Movie App.

**Path:** `./_projects/movie`

## Project Description

Using as datasource the "The Movie DB" api, this project will create an application that will allow a user to browse movies and tv shows.

The user will be able to manage his own lists.

The user will be proposed trending movies and tv shows with when available a trailer.

The user will proposed popular movies and tv shows.

The user will be able to filter the general list or his lists based on several criterias.

## Packages used

### Icons

[Material UI](https://mui.com/material-ui/material-icons/)

- @emotion/react
- @emotion/styled
- @mui/icons-materia
- @mui/material

### Services

- [Axios](https://axios-http.com/docs/intro)

## External services

### The Movie DB API

    The Movie Database (TMDB) is a community built movie and TV database. Every piece of data has been added by our amazing community dating back to 2008. TMDB's strong international focus and breadth of data is largely unmatched and something we're incredibly proud of. Put simply, we live and breathe community and that's precisely what makes us different

I am using the [TheMovieDB](https://www.themoviedb.org/) api for retrieving the information about movies and tv shows.

[TMDB API Getting started](https://developer.themoviedb.org/docs/getting-started)

Searching content 

```bash
curl --request GET \
     --url 'https://api.themoviedb.org/3/search/movie?query=Jack+Reacher' \
     --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MWE2NzU2YzVlMzAzZTk0NDkyMjJlZWZhZWY5NGFjNSIsIm5iZiI6MTcwMzI0NjE4My4zNjIsInN1YiI6IjY1ODU3OTY3NzFmMDk1NTc3YzIzZmVkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vzZ4gBCRvgpKDuilqYji5ueeSJ9uX6qzJLtVjDkbAOI'

curl --request GET \
     --url 'https://api.themoviedb.org/3/movie/343611' \
     --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MWE2NzU2YzVlMzAzZTk0NDkyMjJlZWZhZWY5NGFjNSIsIm5iZiI6MTcwMzI0NjE4My4zNjIsInN1YiI6IjY1ODU3OTY3NzFmMDk1NTc3YzIzZmVkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vzZ4gBCRvgpKDuilqYji5ueeSJ9uX6qzJLtVjDkbAOI'
```

[Findind data](https://developer.themoviedb.org/docs/finding-data)