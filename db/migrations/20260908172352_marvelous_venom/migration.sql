-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `bookings` (
	`id` integer AUTOINCREMENT,
	`full_name` text NOT NULL,
	`email` text NOT NULL,
	`phone` text NOT NULL,
	`service_needed` text NOT NULL,
	`message` text NOT NULL,
	CONSTRAINT `bookings_pk` PRIMARY KEY(`id`)
);

*/