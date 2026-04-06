# abanda-online-GEOG678-spring2026

# Lab 4 – JavaScript Bounding Box Calculation

## Overview
This lab demonstrates the use of JavaScript to process spatial data and compute a bounding box based on a set of coordinate points.

## Approach
A sample dataset was created to simulate geographic coordinate data (latitude and longitude). This dataset represents point locations that could exist in a real-world GIS environment.

Using JavaScript, the program:
- Iterates through the dataset
- Identifies the four corner points:
  - Top Left (max latitude, min longitude)
  - Top Right (max latitude, max longitude)
  - Bottom Left (min latitude, min longitude)
  - Bottom Right (min latitude, max longitude)

## Output
The resulting bounding box object is printed to the browser console along with the author's email address.

