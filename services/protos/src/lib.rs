pub mod nosso {
    pub mod users {
        pub mod v1 {
            include!("nosso.users.v1.rs");
        }
    }
    pub mod domains {
        pub mod v1 {
            include!("nosso.domains.v1.rs");
        }
    }
    pub mod events {
        pub mod v1 {
            include!("nosso.events.v1.rs");
        }
    }
    pub mod util {
        pub mod v1 {
            include!("nosso.util.v1.rs");
        }
    }
}
pub mod google {
    pub mod protobuf {
        include!("google.protobuf.rs");
    }
}
