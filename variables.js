var link = process.env.ADFLY_URL_ENV;

if(link)
    console.log('runner will use '+link);
else {
    console.log('runner nned to setup envoronment variable:');
    console.log('linux: export ADFLY_URL_ENV=put_link_here');
}

