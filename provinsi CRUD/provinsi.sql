-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 07, 2021 at 04:31 PM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 7.4.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `provinsi`
--

-- --------------------------------------------------------

--
-- Table structure for table `kabupaten_tb`
--

CREATE TABLE `kabupaten_tb` (
  `id` int(11) NOT NULL,
  `Nama` varchar(50) NOT NULL,
  `Provinsi_id` int(11) NOT NULL,
  `diresmikan` varchar(50) NOT NULL,
  `photo` blob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `kabupaten_tb`
--

INSERT INTO `kabupaten_tb` (`id`, `Nama`, `Provinsi_id`, `diresmikan`, `photo`) VALUES
(2, 'Kabupaten Malang', 2, '20 April 1987', 0x313633383837383238303131322d4c6f676f5f4b616275706174656e5f4d616c616e675f2d5f5365616c5f6f665f4d616c616e675f526567656e63792e737667),
(3, 'Kabupaten Semarang', 3, '30 Juni 1986', 0x313633383838373336303337352d4c4f474f4b414255504154454e53454d4152414e472e706e67),
(4, 'Kabupaten Bogor', 4, '30 Juni 1986', 0x313633383838373434333235372d426f676f722e706e67),
(5, 'Kabupaten Muara Enim', 5, '8 januari 1887', 0x313633383838373531363631342d4b616275706174656e4d75617261456e696d2e706e67),
(6, 'Tanah Datar', 6, '5 Juni 1977', 0x313633383838373538313234362d646f776e6c6f61642e706e67);

-- --------------------------------------------------------

--
-- Table structure for table `provinsi_tb`
--

CREATE TABLE `provinsi_tb` (
  `id` int(11) NOT NULL,
  `nama` varchar(50) NOT NULL,
  `diresmikan` varchar(50) NOT NULL,
  `photo` blob NOT NULL,
  `pulau` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `provinsi_tb`
--

INSERT INTO `provinsi_tb` (`id`, `nama`, `diresmikan`, `photo`, `pulau`) VALUES
(2, 'Jawa Timur', '20 April 1987', 0x313633383838363939373635302d6a6174696d2e706e67, 'jawa'),
(3, 'Jawa Tengah', '30 Juni 1986', 0x313633383838363936353936302d312e4a4154454e472e706e67, 'jawa'),
(4, 'Jawa Barat', '30 Juni 1986', 0x313633383838373037303933342d4c6f676f50726f764a61776142617261742e706e67, 'jawa'),
(5, 'Sumatera Selatan', '01 Januari 1999', 0x313633383838373134373436302d436f61745f6f665f61726d735f6f665f536f7574685f53756d617472612e7376672e706e67, 'sumatera'),
(6, 'Sumatera Barat', '5 Juni 1977', 0x313633383838373234313237362d6c616d62616e676c6f676f70726f76696e736973756d61746572616261726174706e677472616e73706172616e2d6b616e616c6d752e706e67, 'sumatera');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `kabupaten_tb`
--
ALTER TABLE `kabupaten_tb`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_Provinsi_id` (`Provinsi_id`);

--
-- Indexes for table `provinsi_tb`
--
ALTER TABLE `provinsi_tb`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `kabupaten_tb`
--
ALTER TABLE `kabupaten_tb`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `provinsi_tb`
--
ALTER TABLE `provinsi_tb`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `kabupaten_tb`
--
ALTER TABLE `kabupaten_tb`
  ADD CONSTRAINT `FK_Provinsi_id` FOREIGN KEY (`Provinsi_id`) REFERENCES `provinsi_tb` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
