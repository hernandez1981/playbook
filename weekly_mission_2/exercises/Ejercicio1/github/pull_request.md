```mermaid
 classDiagram
 class PullRequest
 PullRequest : +title
 PullRequest : +branchName
 PullRequest : +dateCreated
 PullRequest : +status
 PullRequest : +repositoryNameAssociated
 PullRequest : +getStatus()
 PullRequest : +getTitleAndAutor()
 ```