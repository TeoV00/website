# website

set in config file inside folder .vitepress:
1. base url as `/nameOfRepo` (DO NOT END WITH '/' -> otherwise wrong load of files)
2. or base url as `/nameOfRepo/subfolder` where `subfolder` is where you wanna put main pages (they can be accessble from url `https://repo.domain.github.io/nameOfRepo/subfolder/nameFile` or also shortly `https://repo.domain.github.io/nameOfRepo/nameFile`, that last one works only becouse base url is set to `/nameOfRepo/subfolder`)

other subfolder can be accesses following base url (check also if it works in case 2)
