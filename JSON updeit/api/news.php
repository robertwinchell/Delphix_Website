<?php

	/* 
	* Sample URL calls
	* category: /api/news.php?category=foo
	* keyword: /api/news.php?keyword=Context
	* date: /api/news.php?date=Jan 6%2C 2016
	*/
	
	/* Vars */
	
	$category = (isset($_GET['category'])) ? $_GET['category'] : false; // TODO: sanitize GET category
	$keyword = (isset($_GET['keyword'])) ? $_GET['keyword'] : false; // TODO: sanitize GET keyword
	$date = (isset($_GET['date'])) ? strtotime(urldecode($_GET['date'])) : false;
	
	/* empty return value */
	$return = array(
		'categories' => array(),
		'news' => array()
	);
	
	/* TEMP sample news data */
	$news = array();
	$news[] = array(
		'id' => 123,
		'title' => 'New Context Services Partners with Delphix to Deliver Data as a Service Software with New Context "Lean Security" Services and Solutions',
		'description' => '<p>Partnership Bridges the Data Management Gap Between DevOps, Compliance and Engineering Teams to Accelerate Software Development Cycles.</p><p>SAN FRANCISCO, Oct. 19, 2015 – New Context Services, a provider of Lean Security for software and infrastructure development, today announced a new partnership with Delphix</p>',
		'path' => '#',
		'date' => 'Dec 19, 2015',
		'category' => 'foo',
		'image' => '/images/news1.jpg'
	);
	$news[] = array(
		'id' => 345,
		'title' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		'description' => '<p>Nam egestas, purus vitae tempus posuere, odio elit porta turpis, eget elementum sem nisl vel sapien.</p>',
		'path' => '#',
		'date' => 'Dec 20, 2015',
		'category' => 'bar',
		'image' => ''
	);
	$news[] = array(
		'id' => 555,
		'title' => 'Delphix Ranked No. 53 Fastest Growing Company in North America on Deloitte\'s 2015 Technology Fast 500',
		'description' => '<p>Attributes 1,713 Percent Revenue Growth to Proven Technology, Large Market Opportunity</p>',
		'path' => '#',
		'date' => 'Dec 21, 2015',
		'category' => 'lipsum',
		'image' => '/images/news2.jpg'
	);
	$news[] = array(
		'id' => 111,
		'title' => 'Fusce mauris lacus, pharetra eget quam id, volutpat vulputate sapien.',
		'description' => '<p>Mauris mattis fringilla magna, eu laoreet purus sagittis eget. Vestibulum a tortor id metus fermentum aliquet.</p>',
		'path' => '#',
		'date' => 'Dec 22, 2015',
		'category' => 'foo',
		'image' => ''
	);
	$news[] = array(
		'id' => 222,
		'title' => 'Delphix Names the Winner of its 2015  Annual Technology Scholarship for Women',
		'description' => '<p>Kelsey D\'Souza of Columbia University Awarded Educational Grant Honoring Women Coders; Jerica Huang of Cornell University Earns Honorable Mention</p>',
		'path' => '#',
		'date' => 'Dec 23, 2015',
		'category' => 'bar',
		'image' => '/images/news3.jpg'
	);
	$news[] = array(
		'id' => 333,
		'title' => 'Mauris at neque ut est finibus imperdiet',
		'description' => '<p>Nullam at est nisl. Nulla varius tortor sit amet interdum mattis.</p>',
		'path' => '#',
		'date' => 'Dec 24, 2015',
		'category' => 'lipsum',
		'image' => ''
	);
	$news[] = array(
		'id' => 444,
		'title' => 'Delphix Ranked No. 53 Fastest Growing Company in North America on Deloitte\'s 2015 Technology Fast 500',
		'description' => '<p>Attributes 1,713 Percent Revenue Growth to Proven Technology, Large Market...</p>',
		'path' => '#',
		'date' => 'Dec 25, 2015',
		'category' => 'foo',
		'image' => '/images/news4.jpg'
	);
	$news[] = array(
		'id' => 666,
		'title' => 'Donec vehicula suscipit suscipit. Suspendisse et vulputate magna.',
		'description' => '<p>Mauris interdum lacus id nibh tincidunt dignissim.</p>',
		'path' => '#',
		'date' => 'Dec 26, 2015',
		'category' => 'bar',
		'image' => ''
	);
	$news[] = array(
		'id' => 657,
		'title' => 'Delphix Ranked No. 53 Fastest Growing Company in North America on Deloitte\'s 2015 Technology Fast 500',
		'description' => '<p>Attributes 1,713 Percent Revenue Growth to Proven Technology, Large Market...</p>',
		'path' => '#',
		'date' => 'Jan 2, 2016',
		'category' => 'lipsum',
		'image' => '/images/news5.jpg'
	);
	$news[] = array(
		'id' => 145,
		'title' => 'Pellentesque nisi felis, venenatis in ipsum at, luctus iaculis mauris',
		'description' => '<p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>',
		'path' => '#',
		'date' => 'Jan 3, 2016',
		'category' => 'foo',
		'image' => ''
	);
	$news[] = array(
		'id' => 789,
		'title' => 'Delphix Ranked No. 53 Fastest Growing Company in North America on Deloitte\'s 2015 Technology Fast 500',
		'description' => '<p>Attributes 1,713 Percent Revenue Growth to Proven Technology, Large Market Opportunity</p>',
		'path' => '#',
		'date' => 'Jan 4, 2016',
		'category' => 'bar',
		'image' => '/images/news6.jpg'
	);
	$news[] = array(
		'id' => 654,
		'title' => 'Donec lobortis ipsum sed odio viverra, ut malesuada neque rhoncus.',
		'description' => '<p>Aliquam bibendum dignissim enim. Morbi fermentum augue a velit tempor hendrerit.</p>',
		'path' => '#',
		'date' => 'Jan 5, 2016',
		'category' => 'lipsum',
		'image' => ''
	);
	$news[] = array(
		'id' => 987,
		'title' => 'Delphix Ranked No. 53 Fastest Growing Company in North America on Deloitte\'s 2015 Technology Fast 500',
		'description' => '<p>Attributes 1,713 Percent Revenue Growth to Proven Technology, Large Market Opportunity</p>',
		'path' => '#',
		'date' => 'Jan 6, 2016',
		'category' => 'foo',
		'image' => ''
	);
	
	foreach ($news as $key => $value) {
		$add = true;
		
		// category filter
		if ($category && $value['category'] != $category) {
			$add = false;
		}
		
		// keyword filter
		if ($keyword) {
			if (strpos($value['title'], $keyword) === false || strpos($value['description'], $keyword) === false) {
				$add = false;
			}
		}
		
		// date filter
		if ($date && strtotime($value['date']) != $date) {
			$add = false;
		}
		
		if ($add) {
			
			// news article
			$return['news'][] = $value;
			
			// categories
			if (!in_array($value['category'], $return['categories'])) {
				$return['categories'][] = $value['category'];
			}
		}
	}
	
	/* return results */
	header('Content-Type: application/json');
	print json_encode($return);
	exit;

?>
