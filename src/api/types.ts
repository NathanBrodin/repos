// Based on the github documentation
// https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28#list-repositories-for-a-user--code-samples
interface SimpleUser {
  name: string | null;
  email: string | null;
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string | null;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  starred_at?: string;
  user_view_type?: string;
}

interface CodeOfConduct {
  key: string;
  name: string;
  url: string;
  body?: string;
  html_url: string | null;
}

interface License {
  key: string;
  name: string;
  spdx_id: string;
  url: string;
  node_id: string;
}

interface SecurityAnalysisFeature {
  status: "enabled" | "disabled";
}

interface SecurityAndAnalysis {
  advanced_security?: SecurityAnalysisFeature;
  code_security?: SecurityAnalysisFeature;
  dependabot_security_updates?: SecurityAnalysisFeature;
  secret_scanning?: SecurityAnalysisFeature;
  secret_scanning_push_protection?: SecurityAnalysisFeature;
  secret_scanning_non_provider_patterns?: SecurityAnalysisFeature;
  secret_scanning_ai_detection?: SecurityAnalysisFeature;
}

interface RepositoryPermissions {
  admin?: boolean;
  maintain?: boolean;
  push?: boolean;
  triage?: boolean;
  pull?: boolean;
}

interface MinimalRepository {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  owner: SimpleUser;
  private: boolean;
  html_url: string;
  description: string | null;
  fork: boolean;
  url: string;
  archive_url: string;
  assignees_url: string;
  blobs_url: string;
  branches_url: string;
  collaborators_url: string;
  comments_url: string;
  commits_url: string;
  compare_url: string;
  contents_url: string;
  contributors_url: string;
  deployments_url: string;
  downloads_url: string;
  events_url: string;
  forks_url: string;
  git_commits_url: string;
  git_refs_url: string;
  git_tags_url: string;
  git_url?: string;
  issue_comment_url: string;
  issue_events_url: string;
  issues_url: string;
  keys_url: string;
  labels_url: string;
  languages_url: string;
  merges_url: string;
  milestones_url: string;
  notifications_url: string;
  pulls_url: string;
  releases_url: string;
  ssh_url?: string;
  stargazers_url: string;
  statuses_url: string;
  subscribers_url: string;
  subscription_url: string;
  tags_url: string;
  teams_url: string;
  trees_url: string;
  clone_url?: string;
  mirror_url?: string | null;
  hooks_url: string;
  svn_url?: string;
  homepage?: string | null;
  language?: string | null;
  forks_count?: number;
  stargazers_count?: number;
  watchers_count?: number;
  size?: number;
  default_branch?: string;
  open_issues_count?: number;
  is_template?: boolean;
  topics?: string[];
  has_issues?: boolean;
  has_projects?: boolean;
  has_wiki?: boolean;
  has_pages?: boolean;
  has_downloads?: boolean;
  has_discussions?: boolean;
  archived?: boolean;
  disabled?: boolean;
  visibility?: string;
  pushed_at?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
  permissions?: RepositoryPermissions;
  role_name?: string;
  temp_clone_token?: string;
  delete_branch_on_merge?: boolean;
  subscribers_count?: number;
  network_count?: number;
  code_of_conduct?: CodeOfConduct;
  license?: License | null;
  forks?: number;
  open_issues?: number;
  watchers?: number;
  allow_forking?: boolean;
  web_commit_signoff_required?: boolean;
  security_and_analysis?: SecurityAndAnalysis | null;
}

export type GetReposByUsernameResponse = MinimalRepository[];
