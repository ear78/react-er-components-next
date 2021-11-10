import Layout from '../components/Layout'
import TeamBuilding from '../components/TeamBuilding'
import { teamMembers } from '../assets/js/data'

export default function Team() {
  return (
    <Layout>
      <TeamBuilding data={teamMembers} />
    </Layout>
  )
}


