use glob::glob;

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let mut protos: Vec<String> = Vec::new();

    for entry in glob("protobufs/**/*.proto")? {
        let path = entry?;
        if let Some(result_path) = path.to_str() {
            protos.push(result_path.to_owned());
        }
    }

    // For development, it is nice to have the compiled messages for inspection
    #[cfg(debug_assertions)]
    println!("COMPILING PROTOBUFS {:?}", protos);
    tonic_build::configure()
        .include_file("lib.rs")
        .out_dir("./src")
        .compile(&protos, &["protobufs".to_string()])
        .unwrap();

    #[cfg(not(debug_assertions))]
    tonic_build::configure()
        .include_file("lib.rs")
        .compile(&protos, &["protobufs".to_string()])
        .unwrap();

    Ok(())
}
