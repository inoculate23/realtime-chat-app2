import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export function Header() {
  const { data: session } = useSession();

  return (
    <header className="p-6 bg-white/5 border-b border-[#363739]">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center">
          <p className="inline-flex items-center space-x-3">
            <a
              href="https://inoculate.media"
              target="_blank"
              rel="noopener noreferrer"
            >
     <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAB4FBMVEVHcExsbGwlJSX4+Pf////x8fH///8eHh7y8vKXkJOMjY3S0tKfn59JTFC2tramp6fBwcGfoJ+AgICioqK/v79xcXFubm5MTEw/P0CxsbEtISdpaWk8PDyFh4aLi4soKChTU1NycnKUlJQ2NjYnJydDQ0MtLS1YWFg0NDQ+Pj5XV1c2NjhmZmZ6enpFRUVQUlVzc3NDRUkwMDC9vb0rLCw8PT1FRUVpaWlfX19wcHBPT0+RkZF4eHhWVlamhYa2g4qSf4iTjHkBIBgcFBgBAQEcHBwUFBQYGBgFBQUODg4eHh8KCgoMDAxPT1ERERAwMDCioqI1NjYiIiJ5enw/HC1AQEA5OTkzMzMtLS2GhoZERUdJSUpkZWgoKCk9PT1XWFpvcHJcJkI4Hy0xGycqKiqMjpBkJUZDHjFJHzVMHCFRIDhaHjZ0K0x8fX5YWl+pqqx/gIOWlpYTCQp0dXdVIz5NIC9VOkhcXFwlIg46OjwlEA2ysrJhYWJQJztlPFAsEyBVGzNWQk0tHhhSU1ZEHjY1Fx1NNDx8LFVAKjUfCRRwN0FULTwuQSMxLSIgIw4mLRA9JRrCwsItJhE9Ehh9Z3KZmZliMUxoam57V2yaYn5xOlmql6SUg49lOkJKNyVHcEwBzrc8AAAAoHRSTlMAkP4VBBwJ/BB/jTRR/VFfPTStQy2nrd/sN/230ppQ6KN9r9vx5vHq8eLW6+qTzva19vFG9em31NS27N1btYyXZ5zW//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8ASCLZRAAAAhFJREFUKM9dklVbG1EURW8CSZOQYEWL1d3d5fuuzMwdyUjcXYlBCMFd6+6/tQRaSrsezzpPe28A/tDUb22z9jeB/2huv3S574rt2oVB3eHmg6Kr+7pCvTZfqM6g00e7/orWXh5yaLnwSbURwjMnhvfFRT1SZE4QCgk/J8URd8a6J1p6XTJlOBgoCH4vQ1gYqJ/raAjTAI+ITBGjLIf9Dkr4QACLt007pk2/809ccihYVwXJF5QCELP4IQDGq4TEMXaWxhAekyH2CQRLbvLICFpuQUaE1D+aCKMxiXKcV4GyG450gLYjFRFVohOL378tvl+LxXB0YnNjYzP2FFg0rbqUyc3nxmfzkUg+HVsZX0/nc9uPwdDSaqYy+fbdgpbNplIRbSUWXU9tZX4+A0Ox1erUy1dTuVQ6Oa8lo0lNy2e31n48AeZodeH15PMXmfRsZG7uy+eP41+Tkez2hBm03oSQhZxDRAirzkQx7AtCysBDw8BwnmcRK/pcCsVlZ7ykqojHmB80AGBBop5lnTUX456uwVBJwFThsK4R6CmoUMnpdgijbz4IgktysIgf2Y3UrDi9M6rHk7BPF8sez2jY61CO7bZg6gyyxB1S7Q08fpmjUrdpryDDcRcmbt5RLtproqLgeKdhfzaWsxRBGLTPMJCIJ3WmA9O50XMfMzSsQLGv59/xAGO7+d7dB3cGzO3G35dfMLGbJLJ+5wYAAAAASUVORK5CYII="/>
            </a>
            <span className="text-white font-bold text-xl">Chatbase</span>
          </p>
          {session ? (
            <div className="flex space-x-1">
              {session?.user?.image && (
                <div className="w-12 h-12 rounded overflow-hidden">
                  <Image
                    width={50}
                    height={50}
                    src={session?.user?.image}
                    alt={session?.user?.name || "User profile picture"}
                    title={session?.user?.name || "User profile picture"}
                  />
                </div>
              )}
              <button
                onClick={() => signOut()}
                className="bg-white/5 rounded h-12 px-6 font-medium text-white border border-transparent"
              >
                Sign out
              </button>
            </div>
          ) : (
            <div className="flex items-center">
              <button
                onClick={() => signIn("github")}
                className="bg-white/5 rounded h-12 px-6 font-medium text-white text-lg border border-transparent inline-flex items-center"
              >
                Sign in with GitHub
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
