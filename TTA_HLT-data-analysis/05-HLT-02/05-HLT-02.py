import pandas as pd




'''
Using the Movie-Data.csv file, answer the following questions:
'''

#1 List the films made by the directors Ridley Scott and Tom Ford (or choose
#your own directors);
films_data = pd.read_csv("Movie-Data.csv", index_col = "Director")

print()

films_data.drop(["Rank", "Genre", "Actors", "Runtime (Minutes)", "Description", "Rating", "Votes", "Year", "Revenue (Millions)", "Metascore"], axis=1, inplace=True)

print("Films made by the directors Ridley Scott and Tom Ford:")

print()

print(films_data.loc[['Ridley Scott', 'Tom Ford']])

print()


#2 List films made in 2014;
films_data = pd.read_csv("Movie-Data.csv", index_col = "Year")

print()

films_data.drop(["Rank", "Genre", "Actors", "Runtime (Minutes)", "Description", "Rating", "Votes", "Director", "Revenue (Millions)", "Metascore"], axis=1, inplace=True)

print()

print("Films made in 2014:")

print(films_data.loc[[2014]])

print()


#3 List the first 10 films on the dataset.
films_data = pd.read_csv("Movie-Data.csv")

print("First 10 films on the dataset:")

print()

print(films_data.head(10))

print()

