use accept_language::intersection;
use i18n_embed::{
    fluent::{fluent_language_loader, FluentLanguageLoader},
    LanguageLoader,
};
pub use i18n_embed_fl::fl;
use lazy_static::lazy_static;
use rust_embed::RustEmbed;
use std::str::FromStr;
use unic_langid::{langid, LanguageIdentifier, LanguageIdentifierError};

lazy_static! {
    pub static ref LANGUAGE_EN: FluentLanguageLoader = {
        let main = langid!("en");
        let supported: Vec<&LanguageIdentifier> = vec![&main];
        let loader = fluent_language_loader!();
        loader.load_languages(&Localizations, &supported).unwrap();
        loader.set_use_isolating(false);

        loader
    };
    pub static ref LANGUAGE_PT: FluentLanguageLoader = {
        let main = langid!("pt");
        let supported: Vec<&LanguageIdentifier> = vec![&main];
        let loader = fluent_language_loader!();
        loader.load_languages(&Localizations, &supported).unwrap();
        loader.set_use_isolating(false);
        loader
    };
}

#[derive(RustEmbed)]
#[folder = "i18n/"]
struct Localizations;

pub fn localize(
    lang: LanguageIdentifier,
) -> Result<&'static FluentLanguageLoader, LanguageIdentifierError> {
    let loader: &FluentLanguageLoader = match lang.language.as_str() {
        "en" => &LANGUAGE_EN,
        "pt" => &LANGUAGE_PT,
        _ => return Err(LanguageIdentifierError::Unknown),
    };
    Ok(loader)
}

pub fn lang_from_accept_language_header(languages: &str) -> LanguageIdentifier {
    let supported = intersection(languages, vec!["en", "pt"]);
    let lang = match supported.len() {
        0 => "en",
        _ => &supported[0],
    };
    LanguageIdentifier::from_str(lang).unwrap()
}
