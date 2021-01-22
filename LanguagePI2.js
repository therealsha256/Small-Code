function main (country){
    language = '';

    switch(country){
        case 'USA':
            case 'England':
                language = 'English';
                break;
        case 'Spain':
        case 'Argentina':
        case 'Mexico':
            language = 'Spanish';
            break;

        default:
            language = 'Unknown'
        }
            console.log(language);
    

}