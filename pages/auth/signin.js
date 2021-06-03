import { getProviders, getSession, signIn } from 'next-auth/client'
import Image from 'next/image'

export default function SignIn({ providers }) {
  return (
    <div className="container container-login">
      {Object.values(providers).map(provider => (
          <div className="providers__icon" key={provider.name}>
            <Image onClick={() => signIn(provider.id)} src={`/${provider.name}.png`} width={50} height={50} />
          </div>
      ))}
    </div>
  )
}

export async function getServerSideProps(context){
  const {req, res} = context
  const session = await getSession(context)
  if(session){
    res.writeHead(302, {Location: '/'})
    res.end()
    return {
      props: {
			  session
		  }
    }
  }

  const providers = await getProviders()
  return {
    props: { providers }
  }
}