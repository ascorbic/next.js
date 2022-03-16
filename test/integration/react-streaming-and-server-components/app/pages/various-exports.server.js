// shared named exports
import { a, b, c, d, e } from '../components/shared-exports'
// client default, named exports
import DefaultArrow, {
  Named as ClientNamed,
} from '../components/client-exports.client'

export default function Page() {
  return (
    <div>
      <div>
        {a}
        {b}
        {c}
        {d}
        {e[0]}
      </div>
      <div>
        <DefaultArrow />
      </div>
      <div>
        <ClientNamed />
      </div>
    </div>
  )
}