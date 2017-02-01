#!/usr/bin/python

import itertools
import random

def generate_name_JSON(file_name):
	""" () -> NoneType

	Create a file of SQL Insert statements for each name in the given list,
	for a specific gender and country. For each name assign 3 attributes
	so that they are evenly distributed among names. 
	"""
	input_file = open(file_name, 'r')
	output_file = open("names.JSON", 'w+')

	names = input_file.readlines()

	output_file.write("{\"names\": [")

	for name in names:
		split_name = name.split();
		output_file.write("{")
		output_file.write("\"name\":\"{0}\",\"nick_name\":\"{1}\",\"attributes\":\"{2}\"".format(split_name[0], split_name[1], split_name[2]))
		output_file.write("}")
		if (name != names[-1]):
			output_file.write(",")


	output_file.write("]}")

	input_file.close()
	output_file.close()



def generate_SQL_insert_random(file_name, gender, country_code, attributes):
	""" (str, str, str, list of str) -> NoneType

	Create a file of SQL Insert statements for each name in the given list,
	for a specific gender and country. For each name assign 3 attributes
	so that they are evenly distributed among names. 
	"""

	input_file = open(file_name, 'r')
	output_file = open('FILL.sql', 'w')

	names = input_file.readlines()
	attributes_combos = list(itertools.combinations(attributes, 3))
	attributes_combos = ["".join(a) for a in attributes_combos]
	
	i = 0

	for name in names:
		if i == len(attributes_combos):
			i = 0
		output_file.write("INSERT INTO Names (name, gender, country, attributes) VALUES (\'{0}\', \'{1}\', \'{2}\', \'{3}\');\n".format(name.strip(), gender, country_code, attributes_combos[i]))
		i += 1
 
	input_file.close()
	output_file.close()

def generate_SQL_insert_chosen(file_name, gender, country_code):
	""" (str, str, str, list of str) -> NoneType

	Create a file of SQL Insert statements for each name in the given list,
	for a specific gender and country. For each name assign 3 attributes
	so that they are evenly distributed among names. 
	"""

	input_file = open(file_name, 'r')
	output_file = open('FILL.sql', 'w')

	names = input_file.readlines()

	for name in names:
		name_attribute = name.split()
		name = name_attribute[0].strip()
		nick_name = name_attribute[1].strip()
		attributes = name_attribute[2].strip()

		output_file.write("INSERT INTO Names (name, nick_name, gender, country, attributes) VALUES (\'{0}\', \'{1}\', \'{2}\', \'{3}\', \'{4}\');\n".format(name, nick_name, gender, country_code, attributes))
 
	input_file.close()
	output_file.close()


def create_bio(names, attributes):
	""" (str, str) -> str

	Create a bio using the chosen name and attributes.
	"""
	new_names = []
	for i in names:
		new_names.append(i.split(' '))

	attribute_names = {'A': 'rebellious', 'B': 'low-key', 'C': 'simple', 'D': 'clever', 'E': 'introverted', 'F': 'extroverted', 'G': 'bold', 'H': 'funny'}

	nickname_sentence = '{0} is usually shorted to {1} by friends and family.\n'

	attribute_sentences = {
	'A': ['are very good at expressing themselves',
	 'are typically not interested in being normal',
	 'have very determined personalities',
	 'are more willing to do something different'], 
	'B': ['do not actively seek attention from others',
	 'are capable of leaving things unsaid', 
	 'tend to enjoy quality time with few people rather than with a large groups'], 
	'C': ['are extremely easy to get along with',
	 'find great joy in small things',
	 'are able to bring peace into other peoples lives'], 
	'D': ['are quick thinkers',
	 'have a very logical response to the world around them',
	 'are able to communicate very well with the people around them, which usually brings them success in their career'], 
	'E': ['are very busy thinkers',
	 'do not reveal their best qualities when they first meet new people',
	 'make great partners and long lasting friends'], 
	'F': ['gain energy when they are around other people',
	 'are a very social person',
	 'socialize very well with other people which makes them enjoyable people to be around'], 
	'G': ['are the first person to try something others are scared to try',
	 'love to try new things',
	 'are great entrepreneuers which bring great change to the people around them'], 
	'H': ['enjoys to make people laugh',
	 'are always in a good mood',
	 'make friends very easily thanks to their happy personality']}

	bio_format = '{0} is a name usually associated with people who {1} and {2}. {0}\'s usually {3}. '

	bios = []

	for i in range(3):
		
		attributes_list = list(attributes)
		first_pick = random.choice(attribute_sentences[attributes_list[0]])
		second_pick = random.choice(attribute_sentences[attributes_list[1]])
		third_pick = random.choice(attribute_sentences[attributes_list[2]])

		bio = bio_format.format(new_names[i][0], first_pick, second_pick, third_pick)

		if len(new_names[i]) == 2:
			bio.strip()
			nick_name = nickname_sentence.format(new_names[i][0], new_names[i][1])
			bio += nick_name


		bios.append(bio)

		attribute_sentences[attributes_list[0]].remove(first_pick)
		attribute_sentences[attributes_list[1]].remove(second_pick)
		attribute_sentences[attributes_list[2]].remove(third_pick)

	return bios

if __name__=="__main__":
	#generate_SQL_insert_random('fill_names.txt', 'M', 'NA', ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'])
	generate_name_JSON("fill_names.txt")
	#generate_SQL_insert_chosen('fill_names.txt', 'M', 'NA')
	#for i in create_bio(['Billy Bill', 'Howard', 'Oscar'], 'AEG'):
	#	print(i)


