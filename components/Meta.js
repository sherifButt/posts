import Head from 'next/head'

const Meta = ({title,keywords,description}) => {
   return (
      <Head>
         <meta name='viewport' content='width=device-width,initial-scale=1' />
         <meta name='keyword' content={keywords} />
         <meta name='description' content={description} />
         <meta charSet='utf-8' />
         <link rel='icon' href='/favicon.ico' />
         <title>{title}</title>
      </Head>
   )
}

Meta.defaultProps = {
   title: 'WebDev Newz',
   keywords: 'web development,programing',
   description:'Get the latest news'
}

export default Meta;