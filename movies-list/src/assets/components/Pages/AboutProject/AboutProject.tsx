const AboutProject = () => {
    return ( 
        <>
            <p>
                `Chat GPT it jāpaprasa masīvs ar Filmām (vismaz 6 keys), kur ir vismaz 10 ieraksti un jāieliek json-server DB.

Prasības:
Applikācja ir trīs sadaļas:
Par projektu - info par mājasdarbu
Filmu saraksts - saraksts ar filmām
Par autoru - info par autoru

Filmas ir jāvar izdzēst, un kad tas tiek izdarīt visas filmas tiek paprasītas no DB pa jaunu (invalidate query).

Katrai filmai ir arī savs atvēruma skats, kurā atšķirībā no list skata rādās arī komentāri un Komentārus ir jāvar arī pievienot.

Ja filma netika atrasta, ir jāsūta uz 404 lapu.

Filmas kartiņa ir atsevišķs komponents.

Visiem react-query hookiem ir jābūt savos izolētos failos, kā mēs to darijām nodarbībā.

Jāizmanto:
React router
React Query
React
CSS modules.

Bonuss:
Applikācijā ir iespējams nomainīt valodu, kur teksti, kas nenāk no DB tulkojās.
Pievienojot komentārus datus validē ar zod

Jāizmanto
zod
react-i18next`
            </p>
        </>
     );
}
 
export default AboutProject;